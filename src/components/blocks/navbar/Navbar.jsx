import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink'; // -------- partial header component -------- //

import Social from './partials/Social';
// ===================================================================

// ===================================================================
const Navbar = (props) => {
  const { navClassName, info, search, social, language, button, cart, fancy, navOtherClass, stickyBox, logoAlt } =
    props;
  const sticky = useSticky(350);
  const navbarRef = useRef(null); // dynamically render the logo

  const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark'; // dynamically added navbar classname

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links

  const renderLinks = (links) => {
    return links.map((item) => (
      <ListItemLink href={item.url} title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));
  }; // all main header contents

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <Link href={`/`}>EZ Mind Psychiatric Care</Link>
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">Sandbox</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* ===================== demos nav item ===================== */}
            <li className="nav-item ">
              <DropdownToggleLink title="Services" className="nav-link " />

              {/* <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                <li className="mega-menu-content mega-menu-scroll">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                    {demos.map(({
                    id,
                    title,
                    url,
                    thumnail
                  }) => <li className="col" key={id}>
                        <Link href={url} passHref legacyBehavior>
                          <a className="dropdown-item">
                            <img alt={title} src={`/img/demos/${thumnail}.jpg`} srcSet={`/img/demos/${thumnail}@2x.jpg 2x`} className="rounded lift d-none d-lg-block" />
                            <span className="d-lg-none">{title}</span>
                          </a>
                        </Link>
                      </li>)}
                  </ul>

                  <span className="d-none d-lg-flex">
                    <i className="uil uil-direction" />
                    <strong>Scroll to view more</strong>
                  </span>
                </li>
              </ul> */}
            </li>

            {/*  ===================== pages nav item  ===================== */}
            <li className="nav-item ">
              <DropdownToggleLink title="About" className="nav-link" />

              {/* <ul className="dropdown-menu">
                {pages.map(({ id, title, children }) => {
                  return (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title={title} />
                      <ul className="dropdown-menu">{renderLinks(children)}</ul>
                    </li>
                  );
                })}

                <ListItemLink href="/pricing" title="Pricing" linkClassName="dropdown-item" />
              </ul> */}
            </li>

            {/* ===================== projects nav item  ===================== */}
            <li className="nav-item ">
              <DropdownToggleLink title="FAQs" className="nav-link " />

              {/* <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  {projectsNavigation.map(({ title, children }, i) => (
                    <div key={title + i}>
                      <h6 className="dropdown-header">{title}</h6>
                      <ul className="list-unstyled">{renderLinks(children)}</ul>
                    </div>
                  ))}
                </div>
              </div> */}
            </li>

            {/* ===================== blog nav item ===================== */}
            <li className="nav-item dropdown">
              <DropdownToggleLink title="Blog" className="nav-link dropdown-toggle" />
            </li>

            {/* ===================== blocks nav item ===================== */}
            <li className="nav-item ">
              <DropdownToggleLink title="Intake Form" className="nav-link " />
              {/* <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                <li className="mega-menu-content">
                  <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                    {blocksNavigation.map(({ id, thumnail, title, url }) => (
                      <li className="col" key={id}>
                        <Link href={url} passHref legacyBehavior>
                          <a className="dropdown-item">
                            <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
                              <img className="rounded-0" src={thumnail} alt="" />
                            </div>

                            <span>{title}</span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul> */}
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@email.com" className="link-inverse" href="mailto:first.last@email.com" />
              <br />
              <NextLink href="tel:0123456789" title="00 (123) 456 78 90" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= contact button ============= */}
          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= shopping cart button ============= */}
          {cart && (
            <li className="nav-item">
              <a
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-cart"
                className="nav-link position-relative d-flex flex-row align-items-center"
              >
                <i className="uil uil-shopping-cart" />
                <span className="badge badge-cart bg-primary">3</span>
              </a>
            </li>
          )}

          {/* ============= social icons link ============= */}
          {social && <Social />}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0
          }}
        />
      )}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
}; // set deafult Props

Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;

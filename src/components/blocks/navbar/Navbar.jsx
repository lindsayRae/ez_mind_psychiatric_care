import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import ListItemLink from 'components/reuseable/links/ListItemLink';

import Social from './partials/Social';
// ===================================================================

// ===================================================================
const Navbar = (props) => {
  const { navClassName, social, button, fancy, navOtherClass, stickyBox, logoAlt } = props;
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
        {/* <Link href={`/`}>EZ Mind Psychiatric Care</Link> */}
        <NextLink
          href="/"
          title={
            <img
              alt="logo"
              src={`/img/logo_green250x70.png`}
              // srcSet={`/img/${logo}@2x.png 2x`}
              style={{ paddingTop: '20px', paddingBottom: '40px' }}
            />
          }
        />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <h3 className="text-white fs-30 mb-0">EZ Mind Psychiatric Care</h3>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* ===================== services nav item ===================== */}
            <li className="nav-item ">
              <Link className="nav-link" href="/#services">
                Services
              </Link>
            </li>

            {/*  ===================== about nav item  ===================== */}
            <li className="nav-item ">
              <Link className="nav-link" href="/#about">
                About
              </Link>
            </li>

            {/* ===================== pricing nav item ===================== */}
            <li className="nav-item ">
              <Link className="nav-link" href="/#pricing">
                Pricing
              </Link>
            </li>

            {/* ===================== faqs nav item ===================== */}
            <li className="nav-item ">
              <Link className="nav-link" href="/#faqs">
                FAQs
              </Link>
            </li>

            {/* ===================== blog nav item ===================== */}
            <li className="nav-item">
              <Link className="nav-link" href="/#blog">
                Blog
              </Link>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="info@ezmindcare.com" className="link-inverse" href="mailto:info@ezmindcare.com" />
              <br />
              <NextLink href="tel:206-319-5399" title="p. 206-319-5399" />
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

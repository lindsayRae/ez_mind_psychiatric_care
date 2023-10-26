import Link from 'next/link';
import { Fragment, useRef } from 'react'; // -------- custom hook -------- //

import useSticky from 'hooks/useSticky'; // -------- custom component -------- //

import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';

import Social from './partials/Social';
import Image from 'next/image';
// ===================================================================

// ===================================================================
const Navbar = (props) => {
  const { navClassName, button, fancy, navOtherClass, stickyBox, logoAlt } = props;
  const sticky = useSticky(350);
  const navbarRef = useRef(null); // dynamically render the logo

  //const logo = sticky ? 'logo-dark' : logoAlt ?? 'logo-dark'; // dynamically added navbar classname

  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed'; // render inner nav item links
  const ScrollLink = ({ href, sectionId, children }) => {
    const handleScroll = (e) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      const offset = 250; // Adjust this value to your desired offset

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
          // Subtract the offset from the top position
          // to create the desired scroll position
          //top: section.getBoundingClientRect().top - offset
          top: '250'
        });
      }
    };

    return (
      <a href={href} className="nav-link" onClick={handleScroll}>
        {children}
      </a>
    );
  };

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
        <NextLink
          href="/"
          title={
            <Image
              alt="logo"
              src={`/img/logo_green250x70.png`}
              // srcSet={`/img/${logo}@2x.png 2x`}

              width={250}
              height={70}
            />
          }
        />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <Image alt="logo" src={`/img/logo_green250x70.png`} width={200} height={60} />
          {/* <h3 className="text-white fs-30 mb-0">EZ Mind Psychiatric Care</h3> */}
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            {/* ===================== services nav item ===================== */}
            <li className="nav-item ">
              <ScrollLink href="/#services" sectionId="services">
                Services
              </ScrollLink>
            </li>

            {/* ===================== testimonials nav item ===================== */}
            <li className="nav-item ">
              <ScrollLink href="/#testimonials" sectionId="testimonials">
                Testimonials
              </ScrollLink>
            </li>

            {/*  ===================== about nav item  ===================== */}
            <li className="nav-item ">
              <ScrollLink href="/#about" sectionId="about">
                About
              </ScrollLink>
            </li>

            {/* ===================== pricing nav item ===================== */}
            <li className="nav-item ">
              <ScrollLink href="/#pricing" sectionId="pricing">
                Pricing
              </ScrollLink>
            </li>

            {/* ===================== faqs nav item ===================== */}
            <li className="nav-item ">
              <ScrollLink href="/#faqs" sectionId="faqs">
                FAQs
              </ScrollLink>
            </li>

            {/* ===================== blog nav item ===================== */}
            <li className="nav-item">
              <ScrollLink href="/#blog" sectionId="blog">
                Blog
              </ScrollLink>
            </li>

            <li className="nav-item">
              <Link href="https://www.valant.io/myio/EZMindPsychiatricCare" target="_blank" className="nav-link">
                Patient Portal
              </Link>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <div style={{ marginBottom: '15px' }}>
                <Link
                  target="_blank"
                  href="https://ezmindpsychcare.intakeq.com/booking"
                  className="btn btn-sm btn-primary rounded"
                  rel="noopener noreferrer"
                >
                  Book Online
                </Link>
              </div>

              <a href="tel:206-319-5399">p. 206-319-5399</a>
              <br />
              <a href="fax:206-385-5946">f. 206-385-5946</a>
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* <div className="navbar-other ms-auto w-100 d-none d-lg-block">
            <SocialLinks className="nav social social-muted justify-content-end text-end" />
          </div> */}
          {/* ============= contact button ============= */}

          {button && <li className="nav-item d-none d-md-block">{button}</li>}

          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas-nav"
              className="hamburger offcanvas-nav-btn"
              role="button"
              aria-label="hamburger menu"
            >
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
  navOtherClass: 'navbar-other ms-lg-4',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};
export default Navbar;

import Link from 'next/link';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks'; // -------- data -------- //
import Image from 'next/image';
//import footerNav, { helps } from 'data/footer';

const Footer9 = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <Image
                className="mb-4"
                src="/img/logo_green250x70.png"
                // srcSet="/img/logo-light@2x.png 2x"
                alt="EZ Mind Care logo"
                width={250}
                height={70}
              />

              <p className="mb-4">
                © 2023 EZ Mind Psychiatric Care <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Need Help?</h4>
              <ul className="list-unstyled  mb-0">
                {/* {helps.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))} */}
                <li>
                  <Link href="www.988lifeline.org" target="_blank">
                    988 Suicide & Crisis Lifeline
                  </Link>
                </li>
                <li>
                  <Link href="www.nami.org" target="_blank">
                    National Alliance on Mental Illness
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled  mb-0">
                {/* {footerNav.map(({
                title,
                url
              }) => <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>)} */}
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#faqs">FAQs</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
              <address>18 W. Mercer St Suite 360 Seattle, WA 98119</address>
              <NextLink title="info@ezmindcare.com" href="mailto:info@ezmindcare.com" />
              <br /> p. 206-319-5399
              <br /> f. 206-385-5946
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer9;

// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks'; // -------- data -------- //

//import footerNav, { helps } from 'data/footer';

const Footer9 = () => {
  return (
    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget">
              <img className="mb-4" src="/img/logo-light.png" srcSet="/img/logo-light@2x.png 2x" alt="" />

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
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
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
                <li>Services</li>
                <li>About</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="widget-title mb-3 text-white">Get in Touch</h4>
              <address>18 W. Mercer St Suite 360 Seattle, WA 48119</address>
              <NextLink title="info@email.com" href="mailto:#" />
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

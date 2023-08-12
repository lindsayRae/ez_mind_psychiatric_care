import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';
import Image from 'next/image';

const Hero4 = () => {
  return (
    <section className="wrapper bg-light position-relative min-vh-70 d-lg-flex align-items-center">
      <div
        // style={{
        //   backgroundImage: 'url(/img/photos/hero_2000x1692.webp)'
        // }}
        id="heroImage"
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50 "
      >
        {/* Add below class if want to hide image on mobile */}
        {/* d-none d-sm-block */}
        {/* <Image src="/img/photos/hero_2000x1692.webp" layout="fill" objectFit="cover" className="rounded-4-lg-start" /> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
              <h1 className="display-2 mb-5" style={slideInDownAnimate('600ms')}>
                Making Mental Health Care Easily Accessible While Providing Quality Holistic Care
              </h1>
              <p className="lead fs-25 lh-sm mb-7 pe-md-10" style={slideInDownAnimate('900ms')}>
                Providing care to 18+ from the comfort of your own home.
              </p>

              <div
                className="d-flex justify-content-center justify-content-lg-start"
                style={slideInDownAnimate('900ms')}
              >
                <span style={slideInDownAnimate('1200ms')}>
                  <NextLink href="#contact" title="Contact Us" className="btn btn-lg btn-primary rounded-pill me-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;

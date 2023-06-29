import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import Script from 'next/script';

import 'animate.css'; // import swiper css

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs'; // video player css

import 'plyr-react/plyr.css'; // glightbox css

import 'glightbox/dist/css/glightbox.css'; // custom scrollcue css

import 'plugins/scrollcue/scrollCue.css'; // Bootstrap and custom scss

import 'assets/scss/style.scss';
import dotenv from 'dotenv';
dotenv.config();

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // load bootstrap functionality
      (() => {
        const bootstrap = require('bootstrap'); // Enables multilevel dropdown

        (function (bs) {
          const CLASS_NAME = 'has-child-dropdown-show';

          bs.Dropdown.prototype.toggle = (function (_original) {
            return function () {
              document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
                e.classList.remove(CLASS_NAME);
              }); // @ts-ignore

              let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');

              for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                dd.classList.add(CLASS_NAME);
              } // @ts-ignore

              return _original.call(this);
            };
          })(bs.Dropdown.prototype.toggle);

          document.querySelectorAll('.dropdown').forEach(function (dd) {
            dd.addEventListener('hide.bs.dropdown', function (e) {
              // @ts-ignore
              if (this.classList.contains(CLASS_NAME)) {
                // @ts-ignore
                this.classList.remove(CLASS_NAME);
                e.preventDefault();
              }

              e.stopPropagation();
            });
          });
        })(bootstrap);
      })();
    }
  }, []); // scroll animation added

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8
      });
      scrollCue.update();
    })();
  }, [pathname]);
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> EZ Mind Psychiatric Care - Holistic Mental Health Practitioner in Washington State</title>
        <meta
          name="description"
          content="At EZ Mind Psychiatric Care, we provide easy access to the care you deserve. Our goal is to meet you where you are in your mental health journey, viewing you as a whole person rather than just a disease process. Our holistic approach addresses the root causes of your symptoms, helping you reduce them and achieve true healing. Discover optimal physical and mental health with our comprehensive range of services."
        />
        <meta
          name="keywords"
          content="mental health practitioner, psychiatric care, holistic approach, Washington State, mental health journey, whole person, disease process, root cause, reduce symptoms, healing, physical health, mental health, comprehensive services"
        />
        {/* Open Graph Meta Tags  */}
        <meta property="og:title" content="Holistic Mental Health Practitioner in Washington State" />
        <meta property="og:type" content="website" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://www.ezmindcare.com/img/photos/og_image.png" />
        <meta property="og:url" content="https://www.ezmindcare.com/" />

        <meta
          property="og:description"
          content="At EZ Mind Psychiatric Care, we provide easy access to the care you deserve. Our goal is to meet you where you are in your mental health journey, viewing you as a whole person rather than just a disease process. Our holistic approach addresses the root causes of your symptoms, helping you reduce them and achieve true healing. Discover optimal physical and mental health with our comprehensive range of services in Washington State."
        />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}')`
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

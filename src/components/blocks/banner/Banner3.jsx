import useLightBox from 'hooks/useLightBox';

const Banner3 = () => {
  // used for light box popup
  useLightBox();
  return (
    <section
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{
        backgroundImage: 'url(/img/photos/bg-scroll1920x1080.webp)'
      }}
    >
      <div className="container py-18 text-center">
        <div className="row">
          <div className="col-lg-10 col-xl-10 col-xxl-8 mx-auto">
            <p className="display-4 px-lg-10 px-xl-13 px-xxl-10 mb-10 text-white">
              " There is hope, even when your brain tells you there isn't." - John Green
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;

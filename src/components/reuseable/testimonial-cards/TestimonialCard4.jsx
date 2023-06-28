import Carousel from '../Carousel';
import TestimonialCard2 from './TestimonialCard2';

export const testimonialList2 = [
  {
    review: `Kristi Ramirez has been amazing and has made such an impact in my life helping me with my mental illness. She is caring, understanding and is doing everything in her power to get me back to who I was before this damn covid hit. She is a jem and a life saver and an amazing woman who has been there for me whenever I have needed her. She is saving my life and my mind. I don't know where I would be without her!`
  },
  {
    review: `Kristi is truly amazing! Life changing experience `
  }
]; // used in the testimonial-13 block
// ============================================================
const TestimonialCard4 = ({ className = '', sliderWrapperClassname = 'p-10 p-md-11 p-lg-13' }) => {
  return (
    <div className={`card shadow-lg ${className}`}>
      <div className="row gx-0">
        <div id="testimonialImage" className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start" />

        <div className="col-lg-6">
          <div className={sliderWrapperClassname}>
            <div className="swiper-container dots-closer mb-4">
              <Carousel grabCursor slidesPerView={1} navigation={false}>
                {testimonialList2.map((item, i) => (
                  <TestimonialCard2 key={i} {...item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard4;

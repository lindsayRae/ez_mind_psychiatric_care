import { TestimonialCard4 } from 'components/reuseable/testimonial-cards';

const Testimonial2 = () => {
  return (
    <div className="position-relative mt-n18 mt-md-n23 mb-16 mb-md-18">
      <h2 className="display-4 mb-10 px-lg-12 px-xl-15 text-center">Testimonials</h2>
      <div
        className="shape rounded-circle bg-line primary rellax w-18 h-18"
        style={{
          zIndex: 0,
          top: '-2rem',
          right: '-2.7rem'
        }}
      />

      <div
        className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
        style={{
          zIndex: 0,
          left: '-3rem',
          bottom: '-1rem'
        }}
      />

      <TestimonialCard4 />
    </div>
  );
};

export default Testimonial2;

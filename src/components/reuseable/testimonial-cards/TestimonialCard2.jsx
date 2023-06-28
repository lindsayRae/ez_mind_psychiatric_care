// =================================================
// =================================================
const TestimonialCard2 = (props) => {
  const { name, review, designation, blockClassName, blockDetailsClassName } = props;
  return (
    <blockquote className={blockClassName}>
      <p>“{review}”</p>

      <div className={blockDetailsClassName}>
        <div className="info ps-0">
          <p className="mb-1 h5">Anonymous</p>
        </div>
      </div>
    </blockquote>
  );
}; // set default props

TestimonialCard2.defaultProps = {
  blockClassName: 'icon icon-top text-center',
  blockDetailsClassName: 'blockquote-details justify-content-center text-center'
};
export default TestimonialCard2;

// ======================================
// ======================================
const Price = props => {
  const {
    value,
    duration,
    classes,
    currency = '$'
  } = props;
  return <div className={`price justify-content-start ${classes}`}>
      <span className="price-currency">{currency}</span>
      <span className="price-value">{value}</span>
      <span className="price-duration">{duration}</span>
    </div>;
};

export default Price;
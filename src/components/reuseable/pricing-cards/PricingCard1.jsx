const PricingCard1 = (props) => {
  const { planName, features, bulletBg } = props;

  return (
    <div className="pricing card shadow-lg">
      <div className="card-body pb-12">
        <p className="card-title mt-2 h4">{planName}</p>

        <ul className={`icon-list ${bulletBg ? 'bullet-bg' : ''} bullet-soft-primary mt-7 mb-8`}>
          {features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard1;

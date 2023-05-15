import Price from './Price';
import NextLink from '../links/NextLink'; // ================================================================

// ================================================================
const PricingCard2 = props => {
  const {
    planName,
    features,
    yearlyPrice,
    monthlyPrice,
    activeYearly,
    roundedButton,
    Icon
  } = props;
  const yearClasses = activeYearly ? 'price-show' : 'price-hide price-hidden';
  const monthClasses = !activeYearly ? 'price-show' : 'price-hide price-hidden';
  return <div className="pricing card shadow-lg text-center">
      <div className="card-body">
        <Icon />

        <h4 className="card-title">{planName}</h4>

        <div className="prices text-dark">
          <Price duration="mo" value={monthlyPrice} classes={monthClasses} />
          <Price duration="yr" value={yearlyPrice} classes={yearClasses} />
        </div>

        <ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
          {features.map((item, i) => <li key={i}>
              <i className="uil uil-check" />
              <span>
                <strong>{item.split(' ')[0]}</strong> {item.split(' ').slice(1).join(' ')}
              </span>
            </li>)}
        </ul>

        <NextLink href="#" title="Choose Plan" className={`btn btn-primary ${roundedButton ? 'rounded' : 'rounded-pill'}`} />
      </div>
    </div>;
};

export default PricingCard2;
import Price from './Price';
import NextLink from '../links/NextLink'; // ================================================================

// ================================================================
const PricingCard1 = (props) => {
  const { planName, features, bulletBg } = props;

  return (
    <div className="pricing card shadow-lg">
      <div className="card-body pb-12">
        <h4 className="card-title mt-2">{planName}</h4>

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

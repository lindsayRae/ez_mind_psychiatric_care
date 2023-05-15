import { useState } from 'react';
import Switch from 'components/reuseable/Switch';
import NextLink from 'components/reuseable/links/NextLink';
import { PricingCard1 } from 'components/reuseable/pricing-cards'; // -------- data -------- //

import { pricingList1 } from 'data/pricing'; // =============================================================

// =============================================================
const Pricing1 = (props) => {
  const { roundShape, roundedButton, bulletBg } = props;
  const [activeYearly, setActiveYearly] = useState(false);
  return (
    <div className="row gy-6 mb-14 mb-md-18">
      <div className="col-lg-4">
        {/* <h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">Pricing</h2> */}
        <h3 className="display-4 mb-3">Pricing</h3>
        <p>
          To book and hold a new appointment a $50 non refundable deposit is required.
          <br />
          Self pay and co-payments are due same day of visit.{' '}
        </p>
      </div>

      <div className="col-lg-7 offset-lg-1 pricing-wrapper">
        <div className="row gy-6 position-relative mt-5">
          {roundShape && (
            <div
              className="shape rounded-circle bg-soft-primary rellax w-18 h-18"
              style={{
                top: '-1rem',
                left: '-2rem'
              }}
            />
          )}

          <div
            className="shape bg-dot red rellax w-16 h-18"
            style={{
              right: '-1.6rem',
              bottom: '-0.5rem'
            }}
          />

          {pricingList1.map((item, i) => (
            <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              <PricingCard1 bulletBg={bulletBg} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; // set deafult props

Pricing1.defaultProps = {
  roundShape: false,
  dottedShape: false,
  roundedButton: false,
  textLineTitle: false,
  titleColor: 'text-muted'
};
export default Pricing1;

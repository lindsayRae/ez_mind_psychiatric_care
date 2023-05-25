//import { Banner4 } from '../banner';
import ListColumn from 'components/reuseable/ListColumn'; // -------- custom hook -------- //

import useLightBox from 'hooks/useLightBox'; // -------- data -------- //

import { aboutList1 } from 'data/about';
//import { PricingCard1 } from 'components/reuseable/pricing-cards'; // -------- data -------- //

const About2 = () => {
  // used for video light box
  useLightBox();
  return (
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-lg-5 offset-lg-1">
        <h2 className="fs-15 text-uppercase text-muted mb-3">Pricing</h2>
        <h3 className="display-4 mb-6">
          If you are interested in monthly subscription for your care, please inquire for more information.
        </h3>

        {/* <p className="mb-6">
          Self pay and co-payments are due same day of visit.
          <br />
          To book and hold new appointment a $50 non refundable deposit is required.
          <br />
          Insurance credentialing is in process - Premara, Aetna, Kaiser At this time we are unable to accept insurance,
          however we are working on this and hope it will be coming soon. In the meantime we are able to provide a super
          bill if you’d like to try to submit to your insurance company for partial reimbursement as we will be
          considered an out of network provider.
        </p> */}
        {/* <div className="row gy-6 mt-5">
          {pricingList1.map((item, i) => <div className={`col-md-6 ${i === 1 && 'popular'}`} key={i}>
              <PricingCard1 bulletBg {...item} activeYearly={activeYearly} />
            </div>)}
        </div> */}

        <ListColumn rowClass="gx-xl-8" list={aboutList1} />
      </div>
      <div className="col-md-8 col-lg-6 position-relative">Cancellation policy</div>
    </div>
  );
};

export default About2;

import Accordion from 'components/reuseable/accordion'; // -------- data -------- //

const accordions = [
  {
    no: 'Thirty',
    expand: false,
    heading: 'Monthly Subscriptions',
    body: 'If you are interested in monthly subscription for your care, please inquire for more information.',
    parent: 'accordionPricing'
  },
  {
    no: 'ThirtyOne',
    expand: false,
    heading: 'Insurance',
    body: 'Currently we accept Aetna, Cigna, Medicare, Optum, Oscar, Oxford, United Health, Magellan, and Kaiser insurance plans. If you have a plan not listed above, we are likely in the credentialing process and will be able to accept your plan soon. If you’d like to be seen and we are not in network with your plan, we can provide you will a super bill for your visits to submit for reimbursement from your insurer; however, you will be responsible for the payment upfront.',
    parent: 'accordionPricing'
  },
  {
    no: 'ThirtyTwo',
    expand: false,
    heading: 'Cancellation Policy',
    body: 'Please cancel 24 hours before your visit. We know things happen but if you know you can’t make your appointment just send us a message or call. Time is valuable and if you are unable to use your appointment time it’s likely another patient can. Late cancellations or no shows are subject to a $50 late fee.',
    parent: 'accordionPricing'
  },
  {
    no: 'ThirtyThree',
    expand: false,
    heading: 'Late Policy',
    body: 'If you are more than 15 minutes late to your appointment, you will be charged no show fee and required to reschedule your visit. All we ask is we respect each others time.',
    parent: 'accordionPricing'
  }
];

const AccordionList = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionPricing">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;

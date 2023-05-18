import Accordion from 'components/reuseable/accordion'; // -------- data -------- //

const accordions = [
  {
    no: 'One',
    expand: false,
    heading: 'Monthly Subscriptions',
    body: 'If you are interested in monthly subscription for your care, please inquire for more information.'
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Insurance',
    body: 'At this time we are unable to accept insurance, however we are working on this and hope it will be coming soon. In the meantime we are able to provide a super bill if you’d like to try to submit to your insurance company for partial reimbursement as we will be considered an out of network provider. Insurance credentialing is in process - Premara, Aetna, and Kaiser.'
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Cancellation Policy',
    body: 'Please cancel 24 hours before your visit. We know things happen but if you know you can’t make your appointment just send us a message or call. Time is valuable and if you are unable to use your appointment time it’s likely another patient can. Late cancellations or no shows are subject to a $50 late fee.'
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Late Policy',
    body: 'If you are more than 15 minutes late to your appointment, you will be charged no show fee and required to reschedule your visit. All we ask is we respect each others time.'
  }
];

const AccordionList = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;

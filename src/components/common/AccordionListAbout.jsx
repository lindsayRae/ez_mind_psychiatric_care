import Accordion from 'components/reuseable/accordion'; // -------- data -------- //

const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Read more...',
    body: `
    I have experience in many areas of nursing. I started my career working as a psychiatric nurse and in intensive care units. That has served a tremendous value as I have continued on my journey in health care. I obtained my graduate degree in nursing and became board certified in Family practice in 2012. I worked in many settings including internal medicine, short term and long term care facilities, family practice working with underserved population, urgent care, and pediatrics. After serving in these areas I noticed they all had something in common, untreated mental health conditions and a shortage of providers to see my patients. I wanted to provide better care and saw an opportunity for me to expand my knowledge and growth. I began my training in psychiatry in 2017 and became board certified in Psychiatric Mental Health in 2020. I bring a unique stance in caring for you as I have great knowledge of both physical and mental health and how these often are intertwined. It is important to get to a place of feeling mentally and physically well and I am here to help you on your journey to optimize both. 
   `
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

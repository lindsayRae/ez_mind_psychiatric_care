import AccordionListAbout from 'components/common/AccordionListAbout';
const list = [
  'Board Certified RN, BSN 2008',
  'Board Certified Family Nurse Practitioner, MSN 2012',
  'Board Certified Psychiatric Nurse Practitioner, Post Masters 2020'
];

const About24 = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
          <div className="col-md-8 col-lg-6 mx-auto">
            {/* <div className="img-mask mask-1"> */}
            <div className="img-mask">
              <img
                style={{ borderRadius: '50%' }}
                src="/img/photos/kristi610x610.webp"
                srcSet="/img/photos/kristi610x610.webp 2x"
                alt="kristi headshot"
                width={595}
                height={595}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="display-5 mb-5">
              Hi, I’m Kristi. I pride myself at being human first, a nurse second, and a nurse practitioner third.
            </h2>
            <p className="mb-6">
              I have walked through life and experienced the ups and downs like you.  My passion is to show up and help
              others; this is truly what I think I was put here on this earth to do.  My most recent passion is helping
              new parents in their transition to parenthood and the challenges that often arise in this space. I would
              love to help guide you through this transition and be the extra support that is so needed during this
              time. I’ve been told by those close to me and my patients that I am a good listener and empathetic.
            </p>
            <AccordionListAbout />
          </div>
        </div>

        <div className="row gx-md-8 gx-xl-12 gy-6 mt-8">
          <div className="col-lg-4">
            <h3>My Degrees</h3>

            <ul className="icon-list bullet-bg bullet-soft-primary">
              {list.map((item) => (
                <li key={item}>
                  <i className="uil uil-check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h3>My Process</h3>
            <p>
              I will start our sessions by listening to you and your story.  It is you that is in control of your care
              and your continued story from there.  I am just here to help you get to where you want to be.  
              <br />
              <br />
              We will form a treatment plan together that feels good for you whether that be therapy, medication with/or
              without therapy, or alternative treatment options such as lifestyle coaching and/or supplements.
              <br />
              <br />I will collaborate with other health care providers on your care team or help refer you where you
              need to go if necessary.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Personal Note</h3>
            <p>
              Outside of caring for you, I am a partner, a mother of 2 young boys and 3 furbabies.  I enjoy spending
              time with my family, being outside and exploring nature, and traveling in my free time.  
              <br />
              <br />
               I cannot wait to meet and work with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About24;

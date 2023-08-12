import { Fragment } from 'react';
import { Tiles10 } from 'components/elements/tiles';

import { aboutList3 } from 'data/about';

const About11 = () => {
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-10 mb-md-12 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <Tiles10 />
        </div>

        <div className="col-lg-6">
          <h2 className="mb-3">About Us</h2>
          <p className="lead fs-lg">
            Here at EZ Mind Psychiatric Care we want you to have access to care you deserve with ease.
          </p>
          <p className="mb-6">
            It is our goal to meet you where you are in your mental health journey.  We view you as a whole person not a
            disease process.  We know that often our mental health is affected by many factors and we are here to help
            you navigate and get to the root cause to reduce your symptoms and help you heal.  We offer holistic care
            and want to help you optimize your health, both physically and mentally.
          </p>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-6 mb-14 mb-md-18">
        {aboutList3.map(({ id, title, description }) => (
          <div className="col-lg-4" key={id}>
            <div className="d-flex flex-row">
              <div>
                <div className="icon btn btn-circle pe-none btn-soft-primary me-4">
                  <span className="number fs-18">{id}</span>
                </div>
              </div>

              <div>
                <h3>{title}</h3>
                <p className="mb-2">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default About11;

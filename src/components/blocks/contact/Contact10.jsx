import Email from 'icons/lineal/Email';

const Contact10 = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.frm_name.value,
      email: e.target.frm_email.value,
      message: e.target.frm_message.value
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/sendEmail';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };
    console.log(options.body);
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log('email API result:', result);
    alert(`Your email was sent!`);
  };
  return (
    <section className="wrapper bg-light" id="contact">
      <div className="container py-14 py-md-16">
        <div className="card bg-soft-primary mb-8">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6">
                <Email />
                <h2 className="display-4 mb-3 pe-lg-10">Contact Us Today</h2>
                <p className="lead pe-lg-12 mb-0">
                  We look forward to meeting you right where you are. Contact us to set up an appointment or to learn
                  more about us.
                </p>
                <small>* Please do not add Protective Health Information on this form</small>
              </div>

              <div className="col-lg-6">
                <form className="contact-form needs-validation" onSubmit={handleSubmit}>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="name"
                          id="frm_name"
                          placeholder="Jane"
                          className="form-control border-0"
                          data-error="First Name is required."
                        />

                        <label htmlFor="frm_name">Name *</label>
                        <div className="invalid-feedback">Please enter your name.</div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          name="email"
                          id="frm_email"
                          className="form-control border-0"
                          placeholder="jane.doe@example.com"
                          data-error="Valid email is required."
                        />

                        <label htmlFor="frm_email">Email *</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a valid email address.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          required
                          name="message"
                          id="frm_message"
                          placeholder="Your message"
                          className="form-control border-0"
                          style={{
                            height: 150
                          }}
                        />

                        <label htmlFor="frm_message">Message *</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please enter your messsage.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <input
                        type="submit"
                        value="Send message"
                        className="btn btn-outline-primary rounded-pill btn-send mb-3"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact10;

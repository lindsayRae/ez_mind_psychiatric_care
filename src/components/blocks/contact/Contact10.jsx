import Email from 'icons/lineal/Email';
import { useState } from 'react';

const Contact10 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(false);
  const [errors2, setErrors2] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    // You can use an API endpoint to send the form data to the server or perform any other action

    let emailBody = { name, email, message };
    if (!name || !email || !message) {
      setErrors(true);
      return;
    }
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailBody)
      });

      if (response.ok) {
        console.log('Email sent successfully');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        setSuccess(true);
      } else {
        console.error('Error sending email');
        setErrors2(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setErrors2(true);
    }
    setTimeout(() => {
      setErrors2(false);
      setSuccess(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 5000);
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
                <form className="contact-form needs-validation" id="contactForm" onSubmit={handleSubmit}>
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control border-0"
                        />
                        <label htmlFor="name">Name *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control border-0"
                        />
                        <label htmlFor="frm_email">Email *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          id="message"
                          className="form-control border-0"
                          style={{
                            height: 150
                          }}
                        />

                        <label htmlFor="message">Message *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      {errors && <p style={{ color: '#b36161' }}>Please complete all form fields</p>}
                      {errors2 && (
                        <p style={{ color: '#b36161' }}>
                          There was an issue sending your email. Please email is directly at info@ezmindcare.com
                        </p>
                      )}
                      {success && (
                        <p style={{ color: '#687dac' }}>
                          Your message was sent successfully! We will be in touch soon.
                        </p>
                      )}
                      <input
                        type="submit"
                        value="Send Message"
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

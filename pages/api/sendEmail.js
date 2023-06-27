import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// configure the package
dotenv.config();

const emailPass = process.env.nodemailer_pass;
const emailUser = process.env.nodemailer_user;
const emailDestination = process.env.nodemailer_destination_email;
const emailService = process.env.nodemailer_email_service;
const emailSubject = process.env.nodemailer_subject;
const environment = process.env.node_env;

const sendEmail = async (req, res) => {
  console.log('HEARD EMAIL');
  if (req.method === 'POST') {
    let subject;
    let emailText = '';

    // for (let key in messageObj) {
    //   let capitalized = key.charAt(0).toUpperCase() + key.slice(1);
    //   emailText += `${capitalized}: \n${messageObj[key]}\n\n`;
    // }

    if (environment != 'production') {
      subject = 'test subject from dev';
    } else if (environment === 'production') {
      // fill in later
      // eventually I will want all the data as an object
      subject = emailSubject;
    }
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    let mailOptions = {
      from: emailUser,
      to: emailDestination,
      subject: subject,
      // text: 'emailText',
      html: `
      <h3>Contact Information:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
export default sendEmail;

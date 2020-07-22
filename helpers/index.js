const nodeMailer = require('nodemailer');

const defaultEmailData = { from: 'noreply@node-react.com' };

exports.sendEmail = (emailData) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: 'ayodeleayoola264@gmail.com',
      pass: 'gsnu ukek tfua tfbx',
    },
  });
  return transporter
    .sendMail(emailData)
    .then((info) => console.log(`Message sent: ${info.response}`))
    .catch((err) => console.log(`Problem sending email: ${err}`));
};

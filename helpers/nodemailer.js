const nodemailer = require("nodemailer");

const { EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport(
  {
    host: "smtp.ukr.net",
    port: 465,
    secure: true,
    auth: {
      user: "markovsm@ukr.net",
      pass: EMAIL_PASS,
    },
  },
  {
    from: "markovsm@ukr.net",
  }
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent:", info);
  });
};

module.exports = mailer;

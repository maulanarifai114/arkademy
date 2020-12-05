const nodemailer = require('nodemailer')

exports.sendEmail = (email, text) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_USERNAME}`, // generated ethereal user
      pass: `${process.env.EMAIL_PASSWORD}`, // generated ethereal password
    },
  });

  console.log('ini token = ', text)
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: "Email Activation", // Subject line
      html: `
      <p>
        Here is your link activation
        <a href="${text}">${text}</a>
      </p>`, // html body
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(info)
      }
    });
  })
}
const nodemailer = require('nodemailer')

exports.sendEmail = (email, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_USERNAME}`, // generated ethereal user
      pass: `${process.env.EMAIL_PASSWORD}` // generated ethereal password
    }
  })

  console.log('ini token = ', token)
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // sender address
      to: email, // list of receivers
      subject: 'Email Activation', // Subject line
      html: `
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Activate Account</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
        <style>
          * {
            font-family: 'Quicksand';
            font-weight: 700;
          }

          input {
            width: 100%;
            margin: 0 0 20px 0;
            padding: 10px;
            border-color: rgba(0, 0, 0, 0);
            background-color: rgb(240, 225, 255);
          }

          .input {
            margin: auto;
            height: fit-content;
            width: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .wrapper {
            height: fit-content;
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          button {
            padding: 10px;
            border-color: rgba(0, 0, 0, 0);
            background-color: rebeccapurple;
            color: white;
            outline: none;
          }

          button:hover {
            background-color: rgb(60, 20, 100);
          }
        </style>
      </head>

      <body>
        <div class="wrapper">
          <form
            action="${process.env.BASE_URL}/v2/users/confirm/${token}"
            method="POST">
            <div class="input">
              <p>Press the button to activate your account </p>
              <input type="text"
                value="${token}"
                disabled>
              <button type="submit">Activate</button>
            </div>
          </form>
        </div>
      </body>

      </html>` // html body
    }
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(info)
      }
    })
  })
}

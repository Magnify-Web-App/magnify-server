const nodemailer = require('nodemailer')

const sendEmail = (req, res) => {
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount()
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'magnifyteam@gmail.com', // generated ethereal user
        pass: process.env.password // generated ethereal password
      }
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'mos311063@gmail.com', // sender address
      to: 'sukialiong@gmail.com', // list of receivers
      subject: 'Magnify', // Subject line
      text: 'Invitation', // plain text body
      html: `<h1>Hello User</h1><p>
      <You have been invite to interview on</p>` // html body
    })
    res.send('Email Send')
  }
  main().catch(console.error)
}

module.exports = { sendEmail }

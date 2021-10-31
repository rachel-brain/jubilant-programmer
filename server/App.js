// FUTURE UPGRADE: CHANGE EMAIL ADDRESS TO: pastry.master@optusnet.com.au

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');

import { Contact } from '../client/pages/Contact';

const app = express();

app.use('/client', express.static(path.join(__dirname, 'client')));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

app.post('/send', (req, res) => {
  console.log(req.body);

  let message = `
  <p>You have received an enquiry via the Contact Us page.  Details are as follows: </p>
  <ul>
    <li> Name: ${req.body.firstName} </li>
    <li> Business Name: ${req.body.businessName} </li>
    <li> Suburb: ${req.body.suburb} </li>
    <li> Email: ${req.body.email} </li>
    <li> Phone: ${req.body.phone} </li>
    <li> Queries: ${req.body.queries} </li>      
  </ul>
`;

    // console.log(inputs);
    // let firstName = inputs.firstName;
    // let businessName = inputs.businessName;
    // let suburb = inputs.suburb;
    // let email = inputs.email;
    // let phone = inputs.phone;
    // let queries = inputs.queries;

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      // proxy: 'http://180.216.169.0' // Do I need a proxy?
      secure: false,
      auth: {
        user: 'qwkfrlqqb2udwjcr@ethereal.email', // generated ethereal user
        pass: 'btN4Cn5a7MWbHWZgtD', // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Wilhelm Auer" <qwkfrlqqb2udwjcr@ethereal.email>', // sender address
      to: "rachel.brain@internode.on.net", // list of receivers
      subject: "Customer enquiry", // Subject line
      text: "Hello!", // plain text body
      html: message, // html body
    });

    res.sendStatus(200);
    if (err) {
    console.log(err);
    res.sendStatus(500);
  };

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

main().catch(console.err);

app.listen(5000, () => console.log('Server started ...'));
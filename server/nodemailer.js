// CHANGE EMAIL ADDRESS TO: pastry.master@optusnet.com.au ?

const nodemailer = require("nodemailer");

router.post('/sendMail', async function(req, res) {
  try{
    console.log(req.body);
    let firstName = req.body.firstName;
    let businessName = req.body.businessName;
    let suburb = req.body.suburb;
    let email = req.body.email;
    let phone = req.body.phone;
    let queries = req.body.queries;

     // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        // proxy: 'http://194.195.253.34' // Do I need a proxy?
        secure:false,
        auth: {
          user: 'qwkfrlqqb2udwjcr@ethereal.email', // generated ethereal user
          pass: 'btN4Cn5a7MWbHWZgtD', // generated ethereal password
        }
    });

    let message = `
    <p>You have received an enquiry via the Contact Us page.  Details are as follows: </p>
    <ul>
      <li> Name: ${firstName} </li>
      <li> Business Name: ${businessName} </li>
      <li> Suburb: ${suburb} </li>
      <li> Email: ${email} </li>
      <li> Phone: ${phone} </li>
      <li> Queries: ${queries} </li>      
    </ul>
  `;

  // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Wilhelm Auer" <qwkfrlqqb2udwjcr@ethereal.email>', // sender address
        to: "rachel.brain@internode.on.net", // list of receivers
        subject: "Customer enquiry", // Subject line
        text: "Hello!", // plain text body
        html: message, // html body
      });

  res.sendStatus(200);
}catch(err){
    console.log(err);
    res.sendStatus(500);
}
// });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

main().catch(console.error);
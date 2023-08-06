const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, //25, 465, 2525
    secure: true,
    auth: {
        user: "denys.chebotarov@meta.ua",
        pass: META_PASSWORD
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
    to: "pedopi2542@quipas.com",
    from: "denys.chebotarov@meta.ua",
    subject: "Test email",
    html: "<p><strong>Test email</strong> from localhost:3000</p>"
};

transport.sendMail(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message));


// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const {SENDGRID_API_KEY} = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY);

// const sendEmail = async (data) => {
//     const email = {...data, from: "bogdan.lyamzin.d@gmail.com"};
//     await sgMail.send(email);
//     return true;
// }

// module.exports = sendEmail;
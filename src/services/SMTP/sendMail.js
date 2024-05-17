const nodemailer = require('nodemailer');
// fibas.Allmessage({}, token, authKey)

const sendEmail = (from, to, subject, text, html) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'himmatprabhkar@gmail.com',
            pass: 'zdsu bmmr zclc unvl'
        }
    });

    let mailOptions = {
        from: 'himmatprabhkar@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: html
    };

    console.log('mailOptions', mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error occurred:', error);
        }
        console.log('Email sent successfully:', info.response);
    });
}

module.exports = sendEmail;

// const nodemailer = require('nodemailer');


// const sendEmail = (from, to, subject, text, html) => {  

//     let transporter = nodemailer.createTransport({
//         service: "gmail",
//         // host: 'smtp.rjstudio.com',
//         port: 587,
//         secure: true,
//         logger: true,
//         debug:true,
//         secureConnection:false,
//         auth: {
//             user: 'himmatprabhkar@gmail.com',
//             pass: '@!.ShaHimm.!@'
//         },
//         tls:{
//             rejectUnauthorized:true
//         }
//     });


//     let mailOptions = {
//         from: 'catchyeo@gmail.com',
//         to: to,
//         subject: subject,
//         text: text,
//         html: html
//     };


//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log('Error occurred:', error);
//         }
//         console.log('Email sent successfully:', info.response);
//     });
// }


// module.exports = sendEmail;

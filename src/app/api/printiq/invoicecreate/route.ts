import { NextResponse } from "next/server";

export async function POST(req, res) {
    const data = await req.json()
    console.log(data)
    // const nodemailer = require('nodemailer');

    // let transporter = nodemailer.createTransport({
    //     host: 'dinozauras.serveriai.lt',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: 'info@diglita.lt',
    //         pass: '89D82BjEysT8AeVQ'
    //     }
    // });

    // // Example usage: send mail with defined transport object
    // transporter.sendMail({
    //     from: '"Diglita" <info@diglita.lt>', // sender address
    //     to: 'rytis@tamosiunas.dev', // list of receivers
    //     subject: 'Užsakymas test', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>' // html body
    // })
    //     .then(info => {
    //         console.log('Message sent: %s', info.messageId);
    //     })
    //     .catch(error => {
    //         console.error('Error occurred: ', error);
    //     });

    return NextResponse.json(data)
}

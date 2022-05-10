import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

// const transport = nodemailer.createTransport({
//     host: "",
//     port: 2525
//     auth: {
//         user: "",
//         pass: "0000acb"
//     }
// });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
    // await RTCIceTransport.sendMail({
    //     form: '',
    //     to: 'Alexsandro <alex@gmail.com>',
    //     subject,
    //     html: body,
    // });
    };
}
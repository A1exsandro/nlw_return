import express from 'express';
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

export const routes = express.Router();

// const transport = nodemailer.createTransport({
//     host: "",
//     port: 2525
//     auth: {
//         user: "",
//         pass: "0000acb"
//     }
// });


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = 

    // await RTCIceTransport.sendMail({
    //     form: '',
    //     to: 'Alexsandro <alex@gmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // });

    return res.status(201).json({ data: feedback });
});
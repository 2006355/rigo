import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT|| 5000;

app.use(bodyParser.json());

app.post('/careers/send-email', async (req, res) => {
    const { to, subject, text,File } = req.body;
    

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Setup email data
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
        File: File
    };

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        res.status(200).send(`Email sent: ${info.response}`);
    } catch (error) {
        res.status(500).send(`Error sending email: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT|| 5000;
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var options = {
    index: "index.html"
  };
  
  var dir = path.join(__dirname, '../public')
app.use(bodyParser.json());
app.use(cors())

app.post('/careers/send-email', async (req, res) => {
    const { from, subject, text } = req.body;
    console.log(req.body);

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
        from: from,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: text,
        attachments: [
            {
                filename: req.body['resume-name'],
                content: req.body['resume'],
                encoding: 'base64'
            }
        ]
        
    };

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        res.status(200).send(`Email sent: ${info.response}`);
    } catch (error) {
        res.status(500).send(`Error sending email: ${error.message}`);
    }
});
app.use(express.static(dir, options));
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
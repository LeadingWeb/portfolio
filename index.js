const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const key = require('./key.json').mail;

// console.log(key);

const app = express();

const PORT = 5010;

const server = app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get('/', (req, res) => {
    // res.sendFile('public/index.html');
}); */

app.post('/contact', (req, res) => {
    console.log(req.body);

    sendMail(req.body);
    res.send('Hello');
});


const myMail = 'deinewebsiteberlin@gmail.com';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: myMail,
        pass: key
    }
});
function sendMail(req) {

    const mailOptions = {
        from: myMail,
        to: 'info@fabiokeller.com',
        subject: 'Contact Form fabiokeller.com',
        text: `Neue Anfrage von ${req.name}  // ${req.email} \n  ${req.message}`
    };

}
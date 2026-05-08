const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `📞 Contact Message from ${name} | BookYourArtist`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b> ${message}</p>`
    });
    res.json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;

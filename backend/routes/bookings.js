const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/auth');

const sendEmail = async (booking) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `🎤 New Booking Request — ${booking.eventType} | BookYourArtist`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background: #0a1628; color: #c9a84c; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">📋 New Booking Request</h2>
          <p style="margin: 5px 0; color: #fff;">BookYourArtist</p>
        </div>
        <div style="padding: 24px; background: #f9f9f9;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #333;">Name:</td><td style="padding: 8px;">${booking.name}</td></tr>
            <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td><td style="padding: 8px;">${booking.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333;">Email:</td><td style="padding: 8px;">${booking.email || 'Not provided'}</td></tr>
            <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #333;">Event Type:</td><td style="padding: 8px;">${booking.eventType}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333;">Event Date:</td><td style="padding: 8px;">${booking.eventDate ? new Date(booking.eventDate).toDateString() : 'Not specified'}</td></tr>
            <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #333;">Budget:</td><td style="padding: 8px;">${booking.budget || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #333;">Artist Requested:</td><td style="padding: 8px;">${booking.artistName || 'Open / Not specified'}</td></tr>
            <tr style="background:#fff;"><td style="padding: 8px; font-weight: bold; color: #333;">Message:</td><td style="padding: 8px;">${booking.message || '—'}</td></tr>
          </table>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">Received at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// POST new booking (public)
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    try { await sendEmail(booking); } catch (emailErr) {
      console.error('Email failed:', emailErr.message);
    }
    res.status(201).json({ message: 'Booking submitted successfully!', booking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all bookings (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('artistId', 'name category').sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH update booking status (admin only)
router.patch('/:id', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE booking (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

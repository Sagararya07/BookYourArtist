const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: '' },
  eventType: {
    type: String,
    required: true,
    enum: ['Wedding', 'Corporate Event', 'Birthday Party', 'College Fest', 'Concert']
  },
  eventDate: { type: Date },
  budget: { type: String },
  artistId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', default: null },
  artistName: { type: String, default: '' },
  message: { type: String, default: '' },
  status: { type: String, enum: ['New', 'Contacted', 'Confirmed', 'Cancelled'], default: 'New' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

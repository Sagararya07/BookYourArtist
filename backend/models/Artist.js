const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['DJ', 'Singer', 'Dancer', 'Comedian', 'Band', 'Anchor', 'Musician', 'Magician', 'Stand-up Comic']
  },
  location: { type: String, required: true },
  bio: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, default: '' },
  portfolio: [{ type: String }],
  experience: { type: String },
  languages: [{ type: String }],
  eventsHandled: { type: Number, default: 0 },
  isExclusive: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5, min: 0, max: 5 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Artist', artistSchema);

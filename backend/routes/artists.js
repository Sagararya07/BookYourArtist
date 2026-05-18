const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Artist = require('../models/Artist');
const authMiddleware = require('../middleware/auth');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../uploads/artists');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// GET all artists (public)
router.get('/', async (req, res) => {
  try {
    const filter = { isActive: true };
    if (req.query.category) filter.category = req.query.category;
    if (req.query.location) filter.location = new RegExp(req.query.location, 'i');
    const artists = await Artist.find(filter).sort({ isExclusive: -1, isFeatured: -1, createdAt: -1 });
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET featured artists (public)
router.get('/featured', async (req, res) => {
  try {
    const artists = await Artist.find({ isFeatured: true, isActive: true }).limit(8);
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET exclusive artists (public)
router.get('/exclusive', async (req, res) => {
  try {
    const artists = await Artist.find({ isExclusive: true, isActive: true });
    res.json(artists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single artist (public)
router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create artist (admin only)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = `/uploads/artists/${req.file.filename}`;
    if (data.languages && typeof data.languages === 'string') {
      data.languages = data.languages.split(',').map(l => l.trim());
    }
    data.isExclusive = data.isExclusive === 'true';
    data.isFeatured = data.isFeatured === 'true';
    const artist = new Artist(data);
    await artist.save();
    res.status(201).json(artist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update artist (admin only)
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.image = `/uploads/artists/${req.file.filename}`;
    if (data.languages && typeof data.languages === 'string') {
      data.languages = data.languages.split(',').map(l => l.trim());
    }
    data.isExclusive = data.isExclusive === 'true';
    data.isFeatured = data.isFeatured === 'true';
    const artist = await Artist.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!artist) return res.status(404).json({ message: 'Artist not found' });
    res.json(artist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE artist (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
    res.json({ message: 'Artist deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

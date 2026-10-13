const router = require('express').Router();
const Allocation = require('../models/Allocation');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try { res.json(await Allocation.find().populate('course').populate('room')); } catch(e) { res.status(500).json({ message: e.message }); }
});
module.exports = router;

// Manual allocation handler with clash detection

// Delete allocation handler

// Auto allocation algorithm structure

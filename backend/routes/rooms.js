const router = require('express').Router();
const Room = require('../models/Room');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try { res.json(await Room.find()); } catch(e) { res.status(500).json({ message: e.message }); }
});
module.exports = router;

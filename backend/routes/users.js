const router = require('express').Router();
const User = require('../models/User');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, adminOnly, async (req, res) => {
  try { res.json(await User.find().select('-password')); } catch(e) { res.status(500).json({ message: e.message }); }
});
module.exports = router;

const router = require('express').Router();
const Course = require('../models/Course');
const { protect, adminOnly } = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try { res.json(await Course.find()); } catch(e) { res.status(500).json({ message: e.message }); }
});
module.exports = router;

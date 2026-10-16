const router = require('express').Router();
const { protect } = require('../middleware/auth');
router.get('/stats', protect, async (req, res) => { res.json({}); });
module.exports = router;

const router = require('express').Router();
const qrcodeCtrl = require('../controllers/qrcode.controller');

// router.get('/generate/:data', qrcodeCtrl.generate);
router.post('/generate', qrcodeCtrl.generate);

module.exports = router
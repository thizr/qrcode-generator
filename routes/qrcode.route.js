const router = require('express').Router();
const qrcodeCtrl = require('../controllers/qrcode.controller');

router.get('/generate/:text', qrcodeCtrl.generate);

module.exports = router
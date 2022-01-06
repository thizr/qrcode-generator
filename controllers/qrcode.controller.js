const qrcode = require('qrcode');
const Canvas = require('canvas')
const fs = require('fs')

exports.generate = (req, res) => {
    qrcode.toDataURL(req.body.data)
    .then((qrcode) => {
        res.render('index', {
            succes : true,
            message : "QR Code Generated",
            data : qrcode});
    })
    .catch((error) => {
        res.status(500).json({
            succes : false,
            message : "Une erreur est survenue",
            data : error});
    })
   
}

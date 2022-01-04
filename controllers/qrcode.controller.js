
const qrcode = require('qrcode');

exports.generate = (req, res) => {
    console.log(req.params.text);
    qrcode.toDataURL(req.params.text, (err, src) => {
        if (err) res.send("Error occured");
      
        // Let us return the QR code image as our response and set it to be the source used in the webpage
        res.render("index", { src });
        // res.status(200).json({qrcode : src})
        console.log(src);
    });
}
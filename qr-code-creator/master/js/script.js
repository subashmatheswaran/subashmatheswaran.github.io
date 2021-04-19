/* JS comes here */
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('qr-code'),
        size: 200,
        value: 'http://wearedapps.github.io/'
    });
})();

function generateQRCode() {
    var qrtext = document.getElementById("qr-text").value;
    document.getElementById("qr-result").innerHTML = "QR code generated for your input" +":";
    
    qr.set({
        foreground: '#5b21ce',
        size: 300,
        value: qrtext
    });
}

/* QR image download */
function download() {
var download = document.getElementById("download");
var image = document.getElementById("qr-code").toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
download.setAttribute("href", image);
//download.setAttribute("download","archive.png");
}
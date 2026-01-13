let qr;

function generateQR() {
    const text = document.getElementById("qrText").value.trim();
    const qrContainer = document.getElementById("qrcode");

    if (text === "") {
        alert("Please enter something!");
        return;
    }

    qrContainer.innerHTML = "";

    qr = new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
    });
}
function downloadQR() {
    const qrContainer = document.getElementById("qrcode");

    if (qrContainer.innerHTML === "") {
        alert("Generate a QR code first!");
        return;
    }

    const img = qrContainer.querySelector("img");
    const canvas = qrContainer.querySelector("canvas");

    let qrImage;

    if (img) {
        qrImage = img.src;
    } else if (canvas) {
        qrImage = canvas.toDataURL("image/png");
    }

    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qr-code.png";
    link.click();
}

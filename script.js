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
        height: 200
    });
}

function downloadQR() {
    const qrContainer = document.getElementById("qrcode");
    const canvas = qrContainer.querySelector("canvas");

    if (!canvas) {
        alert("Generate a QR code first!");
        return;
    }

    canvas.toBlob(function (blob) {
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "qr-code.png";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, "image/png");
}
function generate() {
  const text = document.getElementById("qr-input").value.trim();
  const box = document.getElementById("qr-code");
  const downloadBtn = document.getElementById("download-btn");

  if (!text) {
    alert("Please enter some text or a URL.");
    return;
  }

  box.innerHTML = ""; // clear the previous QR code
  new QRCode(box, {
    text: text,
    width: 256,
    height: 256
  });

  downloadBtn.classList.remove("hidden"); // show download button
}

function download() {
  const img = document.querySelector("#qr-code img");
  if (!img) return;

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "qrcode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Button click events (connects HTML buttons to JS functions)
document.getElementById("generate-btn").addEventListener("click", generate);
document.getElementById("download-btn").addEventListener("click", download);
import QRCode from "qrcode";
import fs from "fs";

const url = "https://nevrosyne5ch.netlify.app";
QRCode.toFile("public/qr-nevrosyne.png", url, {
  color: {
    dark: "#FFD60A",   // jaune électrique
    light: "#000000"   // fond noir
  },
  width: 400,
}, (err) => {
  if (err) throw err;
  console.log("✅ QR code généré : public/qr-nevrosyne.png");
});

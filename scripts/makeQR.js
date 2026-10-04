import QRCode from "qrcode";
import fs from "fs";

const url = "https://nevrosyne.fr";
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

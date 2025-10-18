## Page QR Chrome Extension

Generate a scannable QR code for the page you are currently viewing in Chrome. This extension adds a small popup that listens for the active tab URL and converts it into a QR image using the bundled [`packages/qrcode.js`](packages/qrcode.js) helper.

### How it works

- When you open the popup, `popup.js` asks Chrome for the active tab.
- The tab URL is passed to `qrcode.js`, which renders a QR code inside the popup.
- Styling is kept simple via `popup.css`, and the icon assets live under `assets/icons`.

### Install locally

1. Open `chrome://extensions` in Chrome and enable **Developer mode**.
2. Choose **Load unpacked** and select this project folder (`page_qr`).
3. The extension icon now appears in your toolbar—pin it for quick access.

### Use it

Click the extension icon while on any page. The popup instantly shows a QR code representing the current tab's URL, ready to scan from another device.


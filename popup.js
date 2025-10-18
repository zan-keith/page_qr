
var typeNumber = 0;
var errorCorrectionLevel = 'L';

let currentUrl = null;
let darkMode = false;   

// Get the current URL
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  
    const tab = tabs[0];
    currentUrl = tab.url || null;
  document.getElementById("url").textContent = currentUrl? currentUrl : "No URL found";
  document.getElementById("url").href = currentUrl;
    renderQRCode(currentUrl);
  console.log(currentUrl);


});

function setTheme() {
    if (darkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#FFFFFF";
        document.getElementById("canvas").style.filter = "invert(100%)";
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        document.getElementById("canvas").style.filter = "invert(0%)";
    }
}

function renderQRCode(url) {
    if (currentUrl) {
      var qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData(currentUrl);
      qr.make();

      document.getElementById('canvas').innerHTML = qr.createSvgTag(4);
    }else{
        document.getElementById('canvas').textContent = "No URL found to generate QR code.";
    }
}

document.getElementById("canvas").addEventListener("click", function() {
    darkMode = !darkMode;
    setTheme();

});

setTheme()




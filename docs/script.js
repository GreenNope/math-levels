var nValue = 10;
var addUpgrades = 0;


function updateText() {
  document.getElementById("nValue").innerHtml = nValue.toString();
}

function buyAddUpgrade(amt) {
  var price = 0
  for (var i=addUpgrades + 1; i <= addUpgrades + amt; i++) {
    
    price = price + (Math.pow(1.1, i) * 10);
  }
  
  if (nValue >= price) {
    addUpgrades = addUpgrades + amt;
    nValue = nValue - price;
  }
}

function updateAll {
  nValue = nValue + addUpgrades;
  updateText();
}
window.setInterval(updateAll(), 1000)


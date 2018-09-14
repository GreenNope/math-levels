var nValue = 0;
var addUpgrades = 0;


function updateText() {
  document.getElementById("nValue") = nValue;
}

function buyAddUpgrade(amt) {
  for (var i=addUpgrades + 1; i <= addUpgrades + amt; i++) {    
    nValue = nValue - (Math.pow(1.1, i) * 10);
  }
  
  addUpgrades = addUpgrades + amt;
}

while (true) {
  nValue = nValue + addUpgrades;
  updateText();
  wait(1);
  
}

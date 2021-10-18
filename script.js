var money;
var level;
var totalxp;
let maxBuildingCount = [0, 0, 0, 0, 0, 0, 0, 0];
const xpToLevelUp = [-5, -1, 15, 99, 255, 999, 1499, 2199, 9999];
const itemCosts = ["undefined", 10];
const itemXP = ["undefined", 10];
function level(xp) {
    for (var i = 1; i < 99; i++) {
        if (parseInt(xp) < xpToLevelUp[i] + 1) {
            return (i - 1);
        }
    }
}
function returnLevel() {
    var a = level("2200");
    document.getElementById("xpLevel").innerHTML = a;
}
function buyItem(itemNumber) {
    changeXP = itemXP[itemNumber]
    changeMoney = itemCosts[itemNumber]
    money -= changeMoney;
    totalxp += changeXP;
    update();
}
function update() {
    document.getElementById("money").innerHTML = money;
    document.getElementById("xp").innerHTML = totalxp;
    level = level(totalxp);
    document.getElementById("level").innerHTML = level;
}
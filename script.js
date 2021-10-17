var xp;
var money;
var level;
let maxBuildingCount = [0, 0, 0, 0, 0, 0, 0, 0];
const xpToLevelUp = [-5, -1, 15, 99, 255, 999, 1499, 2199];
function level() {
    for (var i = 1; i < length.xpToLevelUp + 1; i++) {
        if (xp > xpToLevelUp[i]) {
            level = i;
        } else {
            return (i - 1);
        }
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creator = exports.p2 = exports.p1 = void 0;
const characters_1 = require("./characters");
let p1;
exports.p1 = p1;
let p2;
exports.p2 = p2;
function creator(player, option, i) {
    switch (option) {
        case 0:
            {
                player = new characters_1.Assassin("P1", "Assassin", 160, 100, "Finish", 1);
                console.table(player);
            }
            ;
            break;
        case 1:
            {
                player = new characters_1.Archer("P2", "Archer", 150, 120, "Rain of arrows", 3);
                console.table(player);
            }
            break;
        case 2:
            {
                player = new characters_1.Fighter("P1", "Fighter", 300, 110, "Hook", 2);
                console.table(player);
            }
            break;
        case 3:
            {
                player = new characters_1.Mage("P1", "Mage", 120, 140, "Lightning", 3);
                console.table(player);
            }
            break;
    }
    if (i === 1)
        return exports.p1 = p1 = player;
    if (i === 2)
        return exports.p2 = p2 = player;
}
exports.creator = creator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
// colors
const colors_1 = require("./colors");
const creator_1 = require("./creator");
const fight_1 = require("./fight");
let option;
const options = [`${colors_1.red}Assassin${colors_1.reset}`,
    `${colors_1.green}Archer${colors_1.reset}`,
    `${colors_1.magenta}Fighter${colors_1.reset}`,
    `${colors_1.blue}Mage${colors_1.reset}`];
console.log(`${colors_1.green}Hi, Welcome${colors_1.reset}`);
function select(player, i) {
    option = readline.keyInSelect(options, `${colors_1.blue}P${i}${colors_1.reset} - Select your character`);
    if (option === -1) {
        console.clear();
        console.log(`${colors_1.red}this is not a valid option${colors_1.reset}`);
        if (i === 1)
            select({}, 1);
        if (i === 2)
            select({}, 2);
    }
    console.clear();
    console.log(`${colors_1.blue}P${i}${colors_1.reset} is an ${options[option]}, see your attributes:`);
    (0, creator_1.creator)(player, option, i);
}
select({}, 1);
readline.keyInPause();
console.clear();
select({}, 2);
readline.keyInPause();
console.clear();
(0, fight_1.figth)(true);

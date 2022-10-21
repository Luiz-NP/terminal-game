const readline = require("readline-sync");

// colors
import { blue, green, magenta, red, reset } from "./colors";

import { p1, p2, creator } from "./creator";
import { figth } from "./fight";

let option: number;
const options: string[] = [`${red}Assassin${reset}`,
                           `${green}Archer${reset}`,
                           `${magenta}Fighter${reset}`, 
                           `${blue}Mage${reset}`];

console.log(`${green}Hi, Welcome${reset}`);

function select(player: object, i: number): void {
    option = readline.keyInSelect(options, `${blue}P${i}${reset} - Select your character`);
    if (option === -1) {
        console.clear();
        console.log(`${red}this is not a valid option${reset}`);
        
        if (i === 1) select({}, 1);
        if (i === 2) select({}, 2);
    }
    console.clear();
    console.log(`${blue}P${i}${reset} is an ${options[option]}, see your attributes:`);

    creator(player, option, i);
}

select({}, 1);
readline.keyInPause();
console.clear();
select({}, 2);
readline.keyInPause();
console.clear();

figth(true);
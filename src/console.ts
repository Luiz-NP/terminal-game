const readline = require("readline-sync");
import { p1, p2, creator } from "./creator";
import { figth } from "./fight";

const options: string[] = ["Assassin", "Archer", "Fighter", "Mage"];

console.log(`Hi, Welcome`);

function select(player: object, i: number): void {
    let option: number = readline.keyInSelect(options, `P${i} - Select your character`);
    console.clear();
    console.log(`P${i} is an ${options[option]}, see your attributes:`);

    creator(player, option, i);
}

select(p1, 1);
readline.keyInPause();
console.clear();
select(p2, 2);
readline.keyInPause();
console.clear();

figth(true);
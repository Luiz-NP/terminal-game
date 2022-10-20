const readline = require("readline-sync");
import { p1, p2 } from "./creator";

let p1Moves = p1?.moves;
let p2Moves = p2?.moves;

const options: string[] = ["Atack", "Ultimate"]
let move: number;
let round = 1;

let trigger: boolean = true;

export function figth(turn: boolean) {
        console.clear();
        if (turn) console.log(`Round ${round}, fight!`);

        if (trigger) {
            // P1 turn;
            console.log('P1 turn.');
            readline.keyInPause();

            move = readline.keyInSelect(options, "Select yout move");
            console.clear();
                if (move === 1 && p1.moves === 0) {
                    console.log(`P1 used ${options[move]}(${p1.ultimate}) and hit ${p1.damage * 2} damage.`);
                    
                    p2.life -= p1.damage * 2;
                    console.log(`P2 life: ${p2.life}`);
                    readline.keyInPause();
                    
                    p1.moves = p1Moves;
                    
                        if (p2.life <= 0) {
                            console.clear();
                            console.log('P2 died...');
                            readline.keyInPause();
                            console.clear();
                            return console.log('P1 Wins, fatality');
                        } else {
                            trigger = !trigger;
                            figth(false);                      
                        }
                } else if (move === 0) {
                    console.log(`P1 used ${options[move]} and hit ${p1.damage} damage.`);

                    p2.life -= p1.damage;
                    console.log(`P2 life: ${p2.life}`);
                    readline.keyInPause();

                    p1.moves--;

                        if (p2.life <= 0) {
                            console.clear();
                            console.log('P2 died...');
                            readline.keyInPause();
                            console.clear();
                            return console.log('P1 Wins');
                        } else {
                            trigger = !trigger;
                            figth(false);                   
                        }
                } else {
                    console.log(`${options[move]} is not ready(${p1.moves} moves left).`);
                    readline.keyInPause();
                    figth(false);
                }
        } else {
            // P2 turn;
            console.log('P2 turn.');
            readline.keyInPause();

            move = readline.keyInSelect(options, "Select yout move");
            console.clear();
                if (move === 1 && p2.moves === 0) {
                    console.log(`P2 used ${options[move]}(${p2.ultimate}) and hit ${p2.damage * 2} damage.`);
                    
                    p1.life -= p2.damage * 2;
                    console.log(`P1 life: ${p1.life}`);
                    readline.keyInPause();
                    
                    p2.moves = p2Moves;
                    
                        if (p1.life <= 0) {
                            console.clear();
                            console.log('P1 died...');
                            readline.keyInPause();
                            console.clear();
                            return console.log('P2 Wins, fatality');
                        } else {
                            round++;
                            trigger = !trigger;
                            figth(true);                      
                        }
                } else if (move === 0) {
                    console.log(`P1 used ${options[move]} and hit ${p2.damage} damage.`);

                    p1.life -= p2.damage;
                    console.log(`P1 life: ${p1.life}`);
                    readline.keyInPause();

                    p2.moves--;

                        if (p1.life <= 0) {
                            console.clear();
                            console.log('P1 died...');
                            readline.keyInPause();
                            console.clear();
                            return console.log('P2 Wins');
                        } else {
                            round++;
                            trigger = !trigger;
                            figth(true);                   
                        }
                } else {
                    console.log(`${options[move]} is not ready(${p2.moves} moves left).`);
                    readline.keyInPause();
                    figth(false);
                }
        }
}
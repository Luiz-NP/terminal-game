const readline = require("readline-sync");
import { blue, green, red, reset, yellow } from "./colors";
import { p1, p2 } from "./creator";

let p1Moves = p1?.moves;
let p2Moves = p2?.moves;

const options: string[] = [`${red}Atack${reset}`, `${yellow}Ultimate${reset}`]
let move: number;
let round = 1;

let trigger: boolean = true;

export function figth(turn: boolean) {
        console.clear();
        if (turn) console.log(`${green}Round ${round}, fight!${reset}`);

        if (trigger) {
            // P1 turn;
            console.log(`${blue}P1 turn.${reset}`);

            move = readline.keyInSelect(options, "Select yout move");
            if (move === -1) {
                console.clear();
                console.log(`${red}this is not a valid option${reset}`);
            
                figth(false);
            }
            console.clear();
                if (move === 1 && p1.moves === 0) {
                    console.log(`${blue}P1${reset} used ${options[move]}${yellow}(${p1.ultimate})${reset} and hit ${red}${p1.damage * 2} damage${reset}.`);
                    
                    p2.life -= p1.damage * 2;
                    console.log(`${red}P2${reset} life: ${red}${p2.life}${reset}`);
                    readline.keyInPause();
                    
                    p1.moves = p1Moves;
                    
                        if (p2.life <= 0) {
                            console.clear();
                            console.log(`${red}P2 died...${reset}`);
                            readline.keyInPause();
                            console.clear();
                            return console.log(`${blue}P1 Wins${reset}, ${red}Fatality${reset}.`);
                        } else {
                            trigger = !trigger;
                            figth(false);                      
                        }
                } else if (move === 0) {
                    console.log(`${blue}P1${reset} used ${options[move]} and hit ${red}${p1.damage} damage${reset}.`);

                    p2.life -= p1.damage;
                    console.log(`${red}P2${reset} life: ${red}${p2.life}${reset}`);
                    readline.keyInPause();

                    p1.moves--;

                        if (p2.life <= 0) {
                            console.clear();
                            console.log(`${red}P2 died...${reset}`);
                            readline.keyInPause();
                            console.clear();
                            return console.log(`${blue}P1 Wins${reset}.`);
                        } else {
                            trigger = !trigger;
                            figth(false);                   
                        }
                } else {
                    console.log(`${options[move]} is not ready${green}(${p1.moves} moves left)${reset}.`);
                    readline.keyInPause();
                    figth(false);
                }
        } else {
            // P2 turn;
            console.log(`${red}P2 turn.${reset}`);

            move = readline.keyInSelect(options, "Select yout move");
            if (move === -1) {
                console.clear();
                console.log(`${red}this is not a valid option${reset}`);
            
                figth(false);
            }
            console.clear();
                if (move === 1 && p2.moves === 0) {
                    console.log(`${red}P2${reset} used ${options[move]}${yellow}(${p2.ultimate})${reset} and hit ${red}${p2.damage * 2} damage${reset}.`);
                    
                    p1.life -= p2.damage * 2;
                    console.log(`${blue}P1${reset} life: ${red}${p1.life}${reset}`);
                    readline.keyInPause();
                    
                    p2.moves = p2Moves;
                    
                        if (p1.life <= 0) {
                            console.clear();
                            console.log(`${red}P1 died...${reset}`);
                            readline.keyInPause();
                            console.clear();
                            return console.log(`${red}P2 Wins${reset}, ${red}Fatality${reset}.`);
                        } else {
                            round++;
                            trigger = !trigger;
                            figth(true);                      
                        }
                } else if (move === 0) {
                    console.log(`${red}P2${reset} used ${options[move]} and hit ${red}${p2.damage} damage${reset}.`);

                    p1.life -= p2.damage;
                    console.log(`${blue}P1${reset} life: ${red}${p1.life}${reset}`);
                    readline.keyInPause();

                    p2.moves--;

                        if (p1.life <= 0) {
                            console.clear();
                            console.log(`${red}P1 died...${reset}`);
                            readline.keyInPause();
                            console.clear();
                            return console.log(`${red}P2 Wins${reset}.`);
                        } else {
                            round++;
                            trigger = !trigger;
                            figth(true);                   
                        }
                } else {
                    console.log(`${options[move]} is not ready${green}(${p2.moves} moves left)${reset}.`);
                    readline.keyInPause();
                    figth(false);
                }
        }
}
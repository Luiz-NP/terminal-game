"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.figth = void 0;
const readline = require("readline-sync");
const colors_1 = require("./colors");
const creator_1 = require("./creator");
let p1Moves = creator_1.p1 === null || creator_1.p1 === void 0 ? void 0 : creator_1.p1.moves;
let p2Moves = creator_1.p2 === null || creator_1.p2 === void 0 ? void 0 : creator_1.p2.moves;
const options = [`${colors_1.red}Atack${colors_1.reset}`, `${colors_1.yellow}Ultimate${colors_1.reset}`];
let move;
let round = 1;
let trigger = true;
function figth(turn) {
    console.clear();
    if (turn)
        console.log(`${colors_1.green}Round ${round}, fight!${colors_1.reset}`);
    if (trigger) {
        // P1 turn;
        console.log(`${colors_1.blue}P1 turn.${colors_1.reset}`);
        move = readline.keyInSelect(options, "Select yout move");
        if (move === -1) {
            console.clear();
            console.log(`${colors_1.red}this is not a valid option${colors_1.reset}`);
            figth(false);
        }
        console.clear();
        if (move === 1 && creator_1.p1.moves === 0) {
            console.log(`${colors_1.blue}P1${colors_1.reset} used ${options[move]}${colors_1.yellow}(${creator_1.p1.ultimate})${colors_1.reset} and hit ${colors_1.red}${creator_1.p1.damage * 2} damage${colors_1.reset}.`);
            creator_1.p2.life -= creator_1.p1.damage * 2;
            console.log(`${colors_1.red}P2${colors_1.reset} life: ${colors_1.red}${creator_1.p2.life}${colors_1.reset}`);
            readline.keyInPause();
            creator_1.p1.moves = p1Moves;
            if (creator_1.p2.life <= 0) {
                console.clear();
                console.log(`${colors_1.red}P2 died...${colors_1.reset}`);
                readline.keyInPause();
                console.clear();
                return console.log(`${colors_1.blue}P1 Wins${colors_1.reset}, ${colors_1.red}Fatality${colors_1.reset}.`);
            }
            else {
                trigger = !trigger;
                figth(false);
            }
        }
        else if (move === 0) {
            console.log(`${colors_1.blue}P1${colors_1.reset} used ${options[move]} and hit ${colors_1.red}${creator_1.p1.damage} damage${colors_1.reset}.`);
            creator_1.p2.life -= creator_1.p1.damage;
            console.log(`${colors_1.red}P2${colors_1.reset} life: ${colors_1.red}${creator_1.p2.life}${colors_1.reset}`);
            readline.keyInPause();
            creator_1.p1.moves--;
            if (creator_1.p2.life <= 0) {
                console.clear();
                console.log(`${colors_1.red}P2 died...${colors_1.reset}`);
                readline.keyInPause();
                console.clear();
                return console.log(`${colors_1.blue}P1 Wins${colors_1.reset}.`);
            }
            else {
                trigger = !trigger;
                figth(false);
            }
        }
        else {
            console.log(`${options[move]} is not ready${colors_1.green}(${creator_1.p1.moves} moves left)${colors_1.reset}.`);
            readline.keyInPause();
            figth(false);
        }
    }
    else {
        // P2 turn;
        console.log(`${colors_1.red}P2 turn.${colors_1.reset}`);
        move = readline.keyInSelect(options, "Select yout move");
        if (move === -1) {
            console.clear();
            console.log(`${colors_1.red}this is not a valid option${colors_1.reset}`);
            figth(false);
        }
        console.clear();
        if (move === 1 && creator_1.p2.moves === 0) {
            console.log(`${colors_1.red}P2${colors_1.reset} used ${options[move]}${colors_1.yellow}(${creator_1.p2.ultimate})${colors_1.reset} and hit ${colors_1.red}${creator_1.p2.damage * 2} damage${colors_1.reset}.`);
            creator_1.p1.life -= creator_1.p2.damage * 2;
            console.log(`${colors_1.blue}P1${colors_1.reset} life: ${colors_1.red}${creator_1.p1.life}${colors_1.reset}`);
            readline.keyInPause();
            creator_1.p2.moves = p2Moves;
            if (creator_1.p1.life <= 0) {
                console.clear();
                console.log(`${colors_1.red}P1 died...${colors_1.reset}`);
                readline.keyInPause();
                console.clear();
                return console.log(`${colors_1.red}P2 Wins${colors_1.reset}, ${colors_1.red}Fatality${colors_1.reset}.`);
            }
            else {
                round++;
                trigger = !trigger;
                figth(true);
            }
        }
        else if (move === 0) {
            console.log(`${colors_1.red}P2${colors_1.reset} used ${options[move]} and hit ${colors_1.red}${creator_1.p2.damage} damage${colors_1.reset}.`);
            creator_1.p1.life -= creator_1.p2.damage;
            console.log(`${colors_1.blue}P1${colors_1.reset} life: ${colors_1.red}${creator_1.p1.life}${colors_1.reset}`);
            readline.keyInPause();
            creator_1.p2.moves--;
            if (creator_1.p1.life <= 0) {
                console.clear();
                console.log(`${colors_1.red}P1 died...${colors_1.reset}`);
                readline.keyInPause();
                console.clear();
                return console.log(`${colors_1.red}P2 Wins${colors_1.reset}.`);
            }
            else {
                round++;
                trigger = !trigger;
                figth(true);
            }
        }
        else {
            console.log(`${options[move]} is not ready${colors_1.green}(${creator_1.p2.moves} moves left)${colors_1.reset}.`);
            readline.keyInPause();
            figth(false);
        }
    }
}
exports.figth = figth;

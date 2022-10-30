import { Assassin, Archer, Fighter, Mage } from "./characters";
import { red } from "./colors";

type Player = {
    name: string,
    type: string,
    life: number,
    damage: number,
    ultimate: string,
}
let p1: ( Player | any);
let p2: (Player | any);

function creator(player: object, option: number, i: number): object | void {
    switch(option) {
        case 0: {
            player = new Assassin("P1", "Assassin", 160, 100, "Finish", 1);
            console.table(player);
        };
        break;
        case 1: {
            player = new Archer("P2", "Archer", 150, 120, "Rain of arrows", 3);
            console.table(player)
        }
        break;
        case 2: {
            player = new Fighter("P1", "Fighter", 300, 110, "Hook", 2);
            console.table(player);
        }
        break;
        case 3: {
            player = new Mage("P1", "Mage", 120, 140, "Lightning", 3);
            console.table(player);
        }
        break;
    } 

    if (i === 1) return p1 = player;
    if (i === 2) return p2 = player;
}

export {
    p1,
    p2,
    creator
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = exports.Archer = exports.Fighter = exports.Assassin = void 0;
class Character {
    constructor(name, type, life, damage, ultimate, moves) {
        this.name = name;
        this.type = type;
        this.life = life;
        this.damage = damage;
        this.ultimate = ultimate;
        this.moves = moves;
    }
}
class Assassin extends Character {
    constructor(name, type, life, damage, ultimate, moves) {
        super(name, type, life, damage, ultimate, moves);
    }
}
exports.Assassin = Assassin;
class Fighter extends Character {
    constructor(name, type, life, damage, ultimate, moves) {
        super(name, type, life, damage, ultimate, moves);
    }
}
exports.Fighter = Fighter;
class Archer extends Character {
    constructor(name, type, life, damage, ultimate, moves) {
        super(name, type, life, damage, ultimate, moves);
    }
}
exports.Archer = Archer;
class Mage extends Character {
    constructor(name, type, life, damage, ultimate, moves) {
        super(name, type, life, damage, ultimate, moves);
    }
}
exports.Mage = Mage;

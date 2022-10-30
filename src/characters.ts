class Character {
    name: string;
    type: string;
    life: number;
    damage: number;
    ultimate: string;
    moves: number;

    constructor(name: string,
                type: string,
                life: number,
                damage: number,
                ultimate: string,
                moves: number) {
    this.name = name;
    this.type = type;
    this.life = life;
    this.damage = damage;
    this.ultimate = ultimate;
    this.moves = moves;
    }
}

class Assassin extends Character {
    constructor(name: string,
                type: string,  
                life: number, 
                damage: number,
                ultimate: string,
                moves: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate,
                moves);
    }
}

class Fighter extends Character {
    constructor(name: string,
                type: string, 
                life: number, 
                damage: number,
                ultimate: string,
                moves: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate,
                moves);
    }
}

class Archer extends Character {
    constructor(name: string,
                type: string,  
                life: number, 
                damage: number,
                ultimate: string,
                moves: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate,
                moves);
}
}

class Mage extends Character {
    constructor(name: string,
                type: string,  
                life: number, 
                damage: number,
                ultimate: string,
                moves: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate,
                moves);
}
}

export {
    Assassin,
    Fighter,
    Archer,
    Mage
}

class Character {
    name: string;
    type: string;
    life: number;
    damage: number;
    ultimate: string;

    constructor(name: string,
                type: string,
                life: number,
                damage: number,
                ultimate: string,) {
    this.name = name;
    this.type = type;
    this.life = life;
    this.damage = damage;
    this.ultimate = ultimate;
    }
}

class Assassin extends Character {
    constructor(name: string,
                type: string, 
                ultimate: string, 
                life: number, 
                damage: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate);
    }
}

class Fighter extends Character {
    constructor(name: string,
                type: string, 
                ultimate: string, 
                life: number, 
                damage: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate);
    }
}

class Archer extends Character {
    constructor(name: string,
                type: string, 
                ultimate: string, 
                life: number, 
                damage: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate);
}
}

class Mage extends Character {
    constructor(name: string,
                type: string, 
                ultimate: string, 
                life: number, 
                damage: number) {
          super(name,
                type, 
                life, 
                damage, 
                ultimate);
}
}

export {
    Assassin,
    Fighter,
    Archer,
    Mage
}
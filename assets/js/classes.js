// Knight or Mage - Guerreiro ou Mage
// LittleMonster ou BigMonster
class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 10;
        this.maxLife = this.life;
    }
}

class Mage extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('LittleMonster');
        this.life = 40;
        this.attack = 5;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('BigMonster');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}
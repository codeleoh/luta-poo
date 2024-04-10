// Knight, Mage or Rogue - Guerreiro ou Mage
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

class Rogue extends Character {
    constructor(name) {
        super(name);
        this.life = 60;
        this.attack = 18;
        this.defense = 7;
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

class Stage {
    constructor(figther1, figther2, figther1El, figther2El, logObject) {
        this.figther1 = figther1;
        this.figther2 = figther2;
        this.figther1El = figther1El;
        this.figther2El = figther2El;
        this.log = logObject;
    }

    start() {
        this.update();
        
        this.figther1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther1, this.figther2));
        this.figther2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.figther2, this.figther1));
    }

    update() {
        // Fighter 1
        this.figther1El.querySelector('.name').innerHTML = `${this.figther1.name} - ${this.figther1.life.toFixed(1)} HP`;
        let f1Pct = (this.figther1.life / this.figther1.maxLife) * 100;
        this.figther1El.querySelector('.bar').style.width = `${f1Pct}%`;
        // Fighter 2
        this.figther2El.querySelector('.name').innerHTML = `${this.figther2.name} - ${this.figther2.life.toFixed(1)} HP`;
        let f2Pct = (this.figther2.life / this.figther2.maxLife) * 100;
        this.figther2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0) {
            this.log.addMessage('Atacando cachorro morto');
            return
        }

        let attackFactor = (Math.random(2) * 2).toFixed(2);
        let defenseFactor = (Math.random(2) * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`);
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender...`);
        }

        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for(let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}
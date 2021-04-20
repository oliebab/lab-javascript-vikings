// Soldier

class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
        this.health -= damage;
    }   
}

// Viking

class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    attack () {
        super.attack();
        return this.strength;
    }

    receiveDamage (damage) {
        super.receiveDamage(damage);
        if (damage < viking.health) {
            return `${viking.name} has received ${damage} points of damage`;
        } else {
            return `${viking.name} has died in act of combat`;
        }
    }

    battleCry () {
        return "Odin Owns You All!";
    }
}


//const name = 'Harald';
//const strength = 150;
//const health = 300;
const viking = new Viking('Harald', 150, 300);
console.log(viking)

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength); 
    }

    attack () {
        return this.strength;
    }

    receiveDamage (damage) {
      super.receiveDamage(damage);
        if (damage < saxon.health) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return 'A Saxon has died in combat';
        }    
    }
}

saxon = new Saxon(60, 25)

// War

class War {}
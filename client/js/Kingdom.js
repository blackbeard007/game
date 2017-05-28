'use strict';

class Kingdom {
    constructor() {
        this._warriorList = 
            [
             new Warrior('Gnome-Grisha'),
             new Warrior('Ork-Tisha'),
             new Warrior('Elf-Misha'),
             new Warrior('King', 300, 150)
            ];
        this._power = this.sumOfFeature('power');
    }

    attack() {
        this._power = this.sumOfFeature('power');
    }

    defend(power) {
        this._warriorList.forEach(function (warrior) {
            let newHealth = warrior.health - power;
            warrior.health = newHealth;
            if (warrior.health <= 0) {
                warrior.power = 0;
            }
        });
    }

    sumOfFeature(feature) {
        let result = 0;

        this._warriorList.forEach(function (warrior) {
            if (warrior[feature] > 0) {
                result += warrior[feature];
            }
        });

        return result;
    }

    isAlive() {
        let result;

        this._warriorList.forEach(function (warrior) {
            if (warrior.health <= 0){
                result = false;
            } else {
                result = true;
            }
        });

        return result;
    }

    get power() {
        return this._power;
    }

    set power(newPower) {
        this._power = newPower;
    }
}
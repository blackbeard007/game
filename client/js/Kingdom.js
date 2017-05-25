'use strict';

class Kingdom {
    constructor() {
        this._warriorList = 
            [
             new Warrior('Gnome-Grisha'),
             new Warrior('Ork-Tisha'),
             new Warrior('Elf-Misha')
            ];
        this._power = this.sumOfFeature('power');
    }

    attack() {}

    defend(power) {
        this._warriorList.forEach(function (warrior) {
            let newHealth = warrior.health - power;
            warrior.health = newHealth;
        });
    }

    sumOfFeature(feature) {
        let result = 0;

        this._warriorList.forEach(function (warrior) {
            result += warrior[feature];
        });

        return result;
    }

    isAlive() {
        let result = 0;

        this._warriorList.forEach(function (warrior) {
            result += warrior.health;
        });

        return result > 0;
    }

    get power() {
        return this._power;
    }
}
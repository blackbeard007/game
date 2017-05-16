'use strict';

class Warrior {
    constructor(name, health, power) {
        this._name = name;
        this._health = health || 100;
        this._power = power || Math.round(Math.random() * 20);
    }

    get health() {
        return this._health;
    }

    set health(newHealth) {
        this._health = newHealth;
    }

    get power() {
        return this._power;
    }

}
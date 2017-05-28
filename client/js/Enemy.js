'use strict';

class Enemy {
    constructor(data) {
        this._name = data.name;
        this._health = data.health;
        this._power = data.power;
    }

    attack() {}

    defend(power) {
        this._health -= power;
    }

    isAlive() {
        return this._health > 0;
    }

    get power() {
        return this._power;
    }

    get health() {
        return this._health;
    }
}
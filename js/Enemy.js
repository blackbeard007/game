'use strict';

class Enemy {
    constructor(health, power) {
        this._health = health;
        this._power = power || Math.round(Math.random() * 30);
    }

    attack() {}

    defend(power) {
        this._health -= power;
        console.log("health of enemy is %i", this._health);
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
class Warrior {
    constructor(name, health, power) {
        this.name = name;
        this.health = health || 100;
        this.power = power || Math.round(Math.random() * 20);
    }
}
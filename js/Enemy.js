class Enemy {
    constructor(health, power) {
        this.health = health;
        this.power = power || Math.round(Math.random() * 30);
    }

    attack() {
        //console.log("Power of enemy %i", this.power);
        kingdom.defend(enemy.power);  
    }

    defend(power) {
        this.health -= power;
        console.log("health of enemy is %i", this.health);
    }
}
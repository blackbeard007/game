'use strict';

class Battle {
    fight() {
        let randomStart = Math.random(),
            kingdom = new Kingdom(),
            enemy = new Enemy(200);

        console.log("Power of kingdom %i", kingdom.power);
        console.log("Power of enemy %i", enemy.power);

        if (randomStart > 0.5) {
            kingdom.attack();
            enemy.defend(kingdom.power);
        } 

        while (enemy.isAlive()) {
            enemy.attack();
            kingdom.defend(enemy.power); 

            if (!kingdom.isAlive()) {
                break;
            } 

            kingdom.attack();      
            enemy.defend(kingdom.power);
        } 

        if (!kingdom.isAlive()) {
            console.log('!!!!Enemy won!!!!');
        } else {
            console.log('!!!!Kingdom won!!!!');
        } 

        btn.removeEventListener('click', battle.fight);
    }
}
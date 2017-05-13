class Battle {
    fight() {
        let randomStart = Math.random();

        console.log("Power of kingdom %i", kingdom.power);
        console.log("Power of enemy %i", enemy.power);

        if (randomStart > 0.5) {
            kingdom.attack();
        } 

        while (isAlive(getSumOfFeature(kingdom.warriors, 'health')) && isAlive(enemy.health)) {
            enemy.attack();       
            kingdom.attack();          
        } 

        if (!isAlive(getSumOfFeature(kingdom.warriors, 'health'))) {
            console.log('!!!!Enemy won!!!!');
        } else {
            console.log('!!!!Kingdom won!!!!');
        } 

        btn.removeEventListener('click', battle.fight);      
    }
}
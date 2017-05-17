'use strict';

class Battle {
    fight() {
        let randomStart = Math.random(),
            kingdom = new Kingdom(),
            enemy = new Enemy(200),
            game = document.getElementById('game');
            
        generateFeatures();

        if (randomStart > 0.5) {
            kingdom.attack();
            enemy.defend(kingdom.power);
            createEnemyDiv();
        } 

        while (enemy.isAlive()) {
            enemy.attack();
            kingdom.defend(enemy.power); 
            createKingdomDiv();

            if (!kingdom.isAlive()) {
                break;
            } 

            kingdom.attack();  
            enemy.defend(kingdom.power);
            createEnemyDiv();
        } 

        showResults();

        btn.removeEventListener('click', battle.fight);

        function createKingdomDiv () {
            let div = document.createElement('div'),
                tmpl = _.template('Health of warriors: <%= health %>');

            div.classList.add('kingdomSide');
            div.innerHTML = tmpl(
                {
                    health: kingdom.sumOfFeature('health')
                }
            );
            game.appendChild(div);
        }

        function createEnemyDiv () {
            let div = document.createElement('div'),
                tmpl = _.template('Health of enemy: <%= health %>');

            div.classList.add('enemySide');
            div.innerHTML = tmpl(
                {
                    health: enemy.health
                }
            );
            game.appendChild(div);
        }

        function generateFeatures () {
            let powerOfEnemy = document.createElement('div'),
                powerOfKingdom = document.createElement('div'),
                healthOfEnemy = document.createElement('div'),
                healthOfKingdom = document.createElement('div');

            powerOfEnemy.classList.add('power');
            powerOfKingdom.classList.add('power');
            healthOfEnemy.classList.add('health');
            healthOfKingdom.classList.add('health');

            powerOfEnemy.innerHTML = 'Power of enemy ' + enemy.power;
            powerOfKingdom.innerHTML = 'Power of warriors ' + kingdom.power;
            healthOfEnemy.innerHTML = 'Health of enemy ' + enemy.health;
            healthOfKingdom.innerHTML = 'Health of warriors ' + kingdom.sumOfFeature('health');

            game.appendChild(powerOfKingdom);
            game.appendChild(healthOfKingdom)
            game.appendChild(powerOfEnemy);
            game.appendChild(healthOfEnemy);
        }

        function showResults () {
            let divOfWinner = document.createElement('div');
            
            divOfWinner.classList.add('winner');

            if (!kingdom.isAlive()) {
                divOfWinner.classList.add('enemyWinner');
                divOfWinner.innerHTML = 'Enemy killed your warriors';
                game.appendChild(divOfWinner);
            } else {
                divOfWinner.classList.add('kingdomWinner');
                divOfWinner.innerHTML = 'Warriors killed enemy';
                game.appendChild(divOfWinner);
            } 
        }
    }
}
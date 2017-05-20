'use strict';

class Battle {
    fight() {
        let view = (function () {
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

                game.innerHTML = '';

                game.appendChild(powerOfKingdom);
                game.appendChild(healthOfKingdom)
                game.appendChild(powerOfEnemy);
                game.appendChild(healthOfEnemy);
            }

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

            return {
                showResults : showResults,
                generateFeatures: generateFeatures,
                createKingdomDiv: createKingdomDiv,
                createEnemyDiv: createEnemyDiv
            }
        })(),
            randomStart = Math.random(),
            kingdom = new Kingdom(),
            enemy = new Enemy(200),
            game = document.getElementById('game');
            
        view.generateFeatures();

        if (randomStart > 0.5) {
            kingdom.attack();
            enemy.defend(kingdom.power);
            view.createEnemyDiv();
        } 

        while (enemy.isAlive()) {
            enemy.attack();
            kingdom.defend(enemy.power); 
            view.createKingdomDiv();

            if (!kingdom.isAlive()) {
                break;
            } 

            kingdom.attack();  
            enemy.defend(kingdom.power);
            view.createEnemyDiv();
        } 

        view.showResults();      
    }
}
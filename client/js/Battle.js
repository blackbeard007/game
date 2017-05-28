'use strict';

class Battle {
    fight() {
        let view = (function () {
            let game = document.getElementById('game');

            function showResults () {
                if (!kingdom.isAlive()) {
                    $('<div>Enemy killed your warriors</div>').addClass('winner enemyWinner').appendTo(game);
                } else {
                    $('<div>Warriors killed enemy</div>').addClass('winner kingdomWinner').appendTo(game);
                } 
            }

            function generateFeatures () {
                let $kingdomPower = $('<div>Power of warriors '+ kingdom.power + '</div>').addClass('power'),
                    $kingdomHealth = $('<div>Health of warriors '+ kingdom.sumOfFeature('health') + '</div>').addClass('health'),
                    $enemyPower = $('<div>Power of enemy '+ enemy.power + '</div>').addClass('power'),
                    $enemyHealth = $('<div>Health of enemy  '+ enemy.health + '</div>').addClass('health');

                $(game).text('');

                $kingdomPower.appendTo(game);
                $kingdomHealth.appendTo(game);
                $enemyPower.appendTo(game);
                $enemyHealth.appendTo(game);
            }

            function createKingdomDiv () {
                let tmpl = _.template('Enemy\'s attack!!! Health of warriors: <%= health %>');

                $('<div>', {
                    'class': 'kingdomSide',
                    'text': tmpl({ health: kingdom.sumOfFeature('health') }),
                }).appendTo(game);
            }

            function createEnemyDiv () {
                let tmpl = _.template('Warriors\' attack!!! Health of enemy: <%= health %>');

                $('<div>', {
                    'class': 'enemySide',
                    'text': tmpl({ health: enemy.health }),
                }).appendTo(game);
            }

            return {
                showResults : showResults,
                generateFeatures: generateFeatures,
                createKingdomDiv: createKingdomDiv,
                createEnemyDiv: createEnemyDiv
            }
        })(),
            kingdom = new Kingdom(),
            enemy = new Enemy(refreshEnemy());
            
        view.generateFeatures();

        if (Math.random() > 0.5) {
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
             
        function refreshEnemy () {
            let xhr = new XMLHttpRequest(),
                newEnemy;

            xhr.open('GET', 'get-enemy', false);
            xhr.send();

            if (xhr.readyState === 4 && xhr.status === 200) {
                newEnemy = JSON.parse(xhr.responseText);
                return newEnemy;
            }
        }
    }
}
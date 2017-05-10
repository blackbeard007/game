/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {

    function isAlive (health) {
        return health > 0;
    }

    function getSumOfFeature (arr, feature) {
        let result = 0;

        arr.forEach(function (item) {
            result += item[feature];
        });

        return result;
    }
    
/* ----------Класс Battle----------- */
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
        }
    }

/* ----------------------------------- */

/*--------- Класс Kingdom------------- */
    class Kingdom {
        constructor() {
            this.warriors = [new Warrior('Gnome-Grisha'),
                             new Warrior('Ork-Tisha'),
                             new Warrior('Elf-Misha')];
            this.power = getSumOfFeature(this.warriors, 'power');
        }

        attack() {
            //console.log("Power of kingdom %i", this.power);
            enemy.defend(kingdom.power);  
        }

        defend(power) {
            this.warriors.forEach(function (item) {
                item.health -= power;
            });
            console.log("health of warriors is %i", getSumOfFeature(this.warriors, 'health'));
        }

    }
/* ----------------------------------- */

/*--------- Класс Warrior------------- */
    class Warrior {
        constructor(name, health, power) {
            this.name = name;
            this.health = health || 100;
            this.power = power || Math.round(Math.random() * 20);
        }
    }
/* ----------------------------------- */

/* ----------Класс Enemy------------- */
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
/* ----------------------------------- */

    let kingdom = new Kingdom(),
        battle = new Battle(),
        enemy = new Enemy(200);

    btnStartGame.addEventListener('click', battle.fight);
    btnStartGame.addEventListener('click', function () { 
        btnStartGame.innerHTML = 'F5 to start again';
    });
};
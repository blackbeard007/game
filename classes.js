/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {

    function isAlive (health) {
        return health > 0;
    }

    function getSumOfFeature (arr, feature) {
        let result = 0;

        arr.forEach(function (item, i) {
            result += item[feature];
        });

        return result;
    }
    
/* ----------Класс Battle----------- */
    class Battle {

        fight() {
            console.log("Power of kingdom %i", kingdom.power);
            console.log("Power of enemy %i", enemy.power);
            while (1) {

                if (isAlive(kingdom.health)) {
                    kingdom.attack();
                    enemy.defend(kingdom.power);
                } else {
                    console.log('!!!!Enemy won!!!!');
                    break;
                }

                if (isAlive(enemy.health)) {
                    enemy.attack();
                    kingdom.defend(enemy.power);
                } else {
                    console.log('!!!!Kingdom won!!!!');
                    break;
                }

            }
                         
        }

    }

/* ----------------------------------- */

/*--------- Класс Kingdom------------- */
    class Kingdom {
        constructor(health, power) {
            let warriors = [new Warrior('Gnome-Grisha'),
                            new Warrior('Ork-Tisha'),
                            new Warrior('Elf-Misha')];
            this.health = health || getSumOfFeature(warriors, 'health');
            this.power = power || getSumOfFeature(warriors, 'power');
        }

        attack() {
            //console.log("Power of kingdom %i", this.power);
        }

        defend(power) {
            this.health -= power;
            console.log("health of kingdom is %i", this.health);
        }

    }
/* ----------------------------------- */

/*--------- Класс Warrior------------- */
    class Warrior {
        constructor(name, health, power) {
            this.name = name;
            this.health = health || 100;
            this.power = power || Math.round(Math.random() * 15);
        }
    }
/* ----------------------------------- */

/* ----------Класс Enemy------------- */
    class Enemy {
        constructor(health, power) {
            this.health = health || kingdom.health;
            this.power = power || Math.round(Math.random() * 35);
        }

        attack() {
            //console.log("Power of enemy %i", this.power);
        }

        defend(power) {
            this.health -= power;
            console.log("health of enemy is %i", this.health);
        }

    }
/* ----------------------------------- */

    var kingdom = new Kingdom(),
        battle = new Battle(),
        enemy = new Enemy();

    btnStartGame.addEventListener('click', battle.fight);

};
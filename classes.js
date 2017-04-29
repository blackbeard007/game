/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';
var battle = new Battle(),
    kingdom = new Kingdom(),
    enemy = new Enemy();

battle.fight();
/* ----------Класс Battle----------- */
function Battle () {
    Battle.prototype.fight = function () {
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                kingdom.attack();
            } else {
                enemy.attack();
            }
        }
    };

    return this;
}

/* ----------------------------------- */

/*--------- Класс Kingdom------------- */
function Kingdom () {
    let power;

    Kingdom.prototype.attack = function () {
        power = Math.round(Math.random() * 50);
        console.log("Power of kingdom %i", power);
        return power;
    };

    return this;
}
/* ----------------------------------- */

/* ----------Класс Enemy------------- */
function Enemy () {
    let power;

    Enemy.prototype.attack = function () {
        power = Math.round(Math.random() * 50);
        console.log("Power of enemy %i", power);
        return power;
    };

    return this;
}
/* ----------------------------------- */

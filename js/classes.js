/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {
    let kingdom = new Kingdom(),
        battle = new Battle(),
        enemy = new Enemy(200);

    btnStartGame.addEventListener('click', battle.fight);
    btnStartGame.addEventListener('click', function () { 
        btnStartGame.innerHTML = 'F5 to start again';
    });

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
};
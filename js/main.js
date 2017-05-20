/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {
    let btn = document.getElementById('btnStartGame');

    btn.addEventListener('click', startGame);  

    function startGame () {
        let battle = new Battle();
        battle.fight();
    }
}



/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

let btn = document.getElementById('btnStartGame'),
    kingdom = new Kingdom(),
    battle = new Battle(),
    enemy = new Enemy(200);

btn.addEventListener('click', battle.fight);
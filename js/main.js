/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

let btn = document.getElementById('btnStartGame'),
    battle = new Battle();

btn.addEventListener('click', battle.fight);


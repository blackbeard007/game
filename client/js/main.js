/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {
    let server = (function () {
        /*get names from server and show it on a page*/
        function getNames () {
            let btnNames = document.createElement('button'),
                div = document.createElement('div'),
                span = document.createElement('span'),
                output = [];

            btnNames.classList.add('btnInfo');
            btnNames.innerHTML = 'NAMES';
            div.classList.add('info');

            info.appendChild(div);
            div.appendChild(btnNames);

            btnNames.addEventListener('click', function () {
                let xhr = new XMLHttpRequest(),
                    names = '';

                xhr.open('GET', 'get-names');
                xhr.addEventListener('readystatechange', function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        showNames();
                    }
                });
                xhr.send();

                function showNames () {
                    xhr = xhr.responseText.split('');

                    for (let i = 9; i < xhr.length - 2; i++) {
                        names += xhr[i];
                    }

                    names = names.split(',');

                    next:
                    for (let i = 0; i < names.length; i++) {
                        for (let j = 0; j < output.length; j++) {
                            if (output[j] === names[i]) {
                                continue next;
                            }
                        }
                        output.push(names[i]);
                    }

                    span.innerHTML = output;
                    div.appendChild(span);
                }
            });
        }

        /*get time from server and show it on a page*/
        function getTime () {
            let div = document.createElement('div'),
                btnTime = document.createElement('button'),
                time = document.createElement('span');

            btnTime.classList.add('btnInfo');
            btnTime.innerHTML = 'TIME';
            div.classList.add('info');

            info.appendChild(div);
            div.appendChild(btnTime);

            btnTime.addEventListener('click', function () {
                let xhr = new XMLHttpRequest(),
                    out = '';
                  
                xhr.open('GET', 'get-time');
                xhr.addEventListener('readystatechange', function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        xhr = xhr.responseText.split('');

                        for (let i = 15; i < xhr.length - 1; i++) {
                            out += xhr[i];
                        }
                        time.innerHTML = out;
                        div.appendChild(time);
                    }
                });
                xhr.send();
            });
        }

        return {
            getNames: getNames,
            getTime: getTime   
        }
        })(),
        btn = document.getElementById('btnStartGame'),
        info = document.getElementById('info');

    server.getTime();
    server.getNames();

    btn.addEventListener('click', startGame);  

    function startGame () {
        let battle = new Battle();
        battle.fight();
    }
}
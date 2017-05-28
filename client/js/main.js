/* author Vlad Yakymenko Dp-P05 JS Core */
'use strict';

window.onload = function () {
    let server = (function () {
        let info = document.getElementById('info')
        /*get names from server and show it on a page*/
        function getNames () {
            let $div = $('<div>').addClass('info').appendTo(info),
                $span = $('<span>').text(''),
                output = [];

            $('<button>', {
                'class': 'btnInfo',
                'text': 'NAMES'
            }).appendTo($div).on('click', function() {
                let xhr = new XMLHttpRequest(),
                    names = '';

                xhr.open('GET', 'get-names');
                xhr.send();

                xhr.addEventListener('readystatechange', function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        showNames();
                    }
                });

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

                    $span.text(output).appendTo($div);
                }
            });
        }

        /*get time from server and show it on a page*/
        function getTime () {
            let $time = $('<span>').text(''),
                $div = $('<div>').addClass('info').appendTo(info),
                $btnTime = $('<button>').addClass('btnInfo').text('TIME').appendTo($div);

            $btnTime.on('click', function () {
                let xhr = new XMLHttpRequest(),
                    out = '';
                  
                xhr.open('GET', 'get-time');
                xhr.send();

                xhr.addEventListener('readystatechange', function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        xhr = xhr.responseText.split('');

                        for (let i = 15; i < xhr.length - 1; i++) {
                            out += xhr[i];
                        }

                        $time.text(out).appendTo($div);                 
                    }
                });
            });
        }

        return {
            getNames: getNames,
            getTime: getTime   
        }
        })(),
        btn = document.getElementById('btnStartGame');

    server.getTime();
    server.getNames();

    $(btn).on('click', startGame);  

    function startGame () {
        setInterval(function() {
            let battle = new Battle();
            battle.fight();
        }, 3000);
    }
}
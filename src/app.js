import core from './module/core';
import lodash from 'lodash';
import readline from 'readline';
import sizeof from 'sizeof';
import fs from 'fs';

var _core = new core(255, 255, 255);
var _core4 = new core(255, 255, 255, 255);
lodash.map(_core.obj, (value) => {
    console.log(value);
});


var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('path> ');
rl.prompt();
rl.on('line', function (line) {
    //let line = "c:/log.txt";
    fs.readFile(line, function (err, data) {
        if (!err) {
            console.log('received data: (' + sizeof.sizeof(data, true) + ')' + data);
            var arr = [];
            var arr4 =[];
            var str = data.toString();
            for (let i = 0; i <= str.length; i = i + 3) {
                arr.push(_core.to1xD((str[i] || ' ').charCodeAt(), (str[i + 1] || ' ').charCodeAt(), (str[i + 2] || ' ').charCodeAt()));
            }
            for (let i = 0; i <= str.length; i = i + 4) {
                arr4.push(_core4.to1xD((str[i] || ' ').charCodeAt(), (str[i + 1] || ' ').charCodeAt(), (str[i + 2] || ' ').charCodeAt(),(str[i + 3] || ' ').charCodeAt()));
            }
            console.log("converted to:  ("+sizeof.sizeof(arr,true)+') ->3d->' +arr);
            console.log("converted to 4:  ("+sizeof.sizeof(arr4,true)+') ->4d->'+ arr4 );

            var resultarr = [];
            for (let i = 0; i <= arr.length; i = i + 1) {
                let val = _core.toXD((arr[i] || ' '));
                resultarr.push(...val.reverse());
            }
            console.log("again converted to: (" + sizeof.sizeof(resultarr, true) + ') ->' + String.fromCharCode(...resultarr));
            rl.close();
        } else {
            console.log(err);
            rl.prompt();
        }
    });
    //http://stackoverflow.com/questions/29142417/4d-position-from-1d-index


}).on('close', function () {
    process.exit(0);
});


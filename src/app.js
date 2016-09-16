import core from './module/core';
import lodash from 'lodash';
import readline from 'readline';

var _core = new core({value:'test'});
lodash.map(_core.obj,(value)=>{
    console.log(value);
});

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});
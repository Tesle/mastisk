import core from './module/core';
import lodash from 'lodash';
import readline from 'readline';
import sizeof from 'sizeof';
import fs from 'fs';

var _core = new core(255,255,255);
lodash.map(_core.obj,(value)=>{
    console.log(value);
});


var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('path> ');
rl.prompt();
rl.on('line', function(line) {
    fs.readFile(line, function(err,data){
    if (!err){
     console.log('received data: ('+sizeof.sizeof(data,true)+')' + data);
     var arr = [];
     var str = data.toString();
     for (let i=0; i<=str.length; i=i+3){
        arr.push( _core.to1D((str[i]||' ').charCodeAt(),(str[i+1]||' ').charCodeAt(),(str[i+2]||' ').charCodeAt()));
     }
     console.log("converted to:  ("+sizeof.sizeof(arr,true)+') ->3d' );
     var resultarr = [];
     for (let i=0; i<=arr.length; i=i+1){
         let val = _core.to3D((arr[i]||' '));
        resultarr.push(val.x);
         resultarr.push(val.y);
          resultarr.push(val.z);
     }

     console.log("again converted to: ("+sizeof.sizeof(resultarr,true)+') ->' + String.fromCharCode(...resultarr));
      rl.close();
    }else{
        console.log(err);
        rl.prompt();
    }
});
//http://stackoverflow.com/questions/29142417/4d-position-from-1d-index
    
    
}).on('close',function(){
    process.exit(0);
});


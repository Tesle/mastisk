import core from './module/core';
import lodash from 'lodash';

var _core = new core({value:'test'});
lodash.map(_core.obj,(value)=>{
    console.log(value);
});

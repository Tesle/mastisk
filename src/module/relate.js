
import lodash from 'lodash';
class relate {
    constructor(...args) {
        // this.arr =  args[0];
        this.jobj = [];
        this.rarray = [];
    }

    mixMatch(jarray) {
      //  let  = [[1, 2, 3, 4, 6, 5], [1, 2, 3, 4], [2, 3, 4], [7, 8, 9, 10], [1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8, 9]];

        jarray.forEach((x, index) => {
            this.searchCommon(x);
        });
        console.log('nuro->', this.jobj);
    }

    commonPathSet() {
        //this.jobj[key] = val;
    }
    commonPathGet() {
        // return this.jobj;
    }
    searchCommon(x) {
        //console.log('tmpt ---', x);
        let xtemp = lodash.concat([], x);
        this.rarray.forEach((z, indx) => {
            let krr = [];
            let tmparr = -1;
            let tmparr1 = -1;
            let pmatch = false;
            if (tmparr1 == -1) {
                z.forEach((n, index) => {
                    if (pmatch) { return; }
                    let match = false;
                    if (tmparr == -1) {
                        xtemp.forEach((m, index1) => {
                            if (match) { return; }
                            if (n == m) {
                                tmparr = index1;
                                match = true;
                            }
                        });
                    }
                    if (match) {
                        tmparr1 = index;
                        pmatch = true;
                    }
                });
            }
            //console.log(z[tmparr1] + '==' + xtemp[tmparr]);
            if (z[tmparr1] && xtemp[tmparr]) {
                while (z[tmparr1] == xtemp[tmparr] && tmparr < 15) {
                    if (z[tmparr1] != undefined) {
                        krr.push(z[tmparr1]);
                    }
                    else {
                        break;
                    }
                    tmparr1++; tmparr++;
                }
                //console.log(krr);
            }
            if (krr.length >= 3) {
                let flag = false;
                this.jobj.forEach((item) => {
                    if(flag) return;
                    //console.log(item + '-----'+krr);
                    flag = lodash.isEqual(item.sort(), krr.sort());
                });
                //console.log("=====");
                if (!flag) {
                    this.jobj.push(lodash.concat([], krr));
                }
            }
        });

        this.rarray.push(x);
    }
}

export default relate;
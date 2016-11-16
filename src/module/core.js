class core {
    constructor(...args) {
        this.obj = args;
        this.xMax = args[0];
        this.yMax = args[1];
        this.zMax = args[2];
        this.argMax = args;
    }
    to1D(x, y, z) {
       // console.log(x + ',' + y + ',' + z + ',');
        return (z * this.xMax * this.yMax) + (y * this.xMax) + x;
    }

    to3D(idx) {
        let z = Math.round(idx / (this.xMax * this.yMax));
        let idy = idx - (z * this.xMax * this.yMax);
        let y = Math.round(idy / this.xMax);
        let x = Math.round(idy % this.xMax);

        //console.log(x + ',' + y + ',' + z + ',');
        return { x, y, z };
    }

    toXD(indx) {
        let Xn = [];
        this.argMax.forEach((x, index) => {
            let val = ((indx - this.calcDx(Xn)) / this.calcDval(index)) % x;
            Xn.push(Math.round(val));
        });
        return Xn;
    }

    to1xD(...args) {
        let xd = args.length;
        let maxXd = this.argMax.length;
        let oneD = 0;
        if (xd !== maxXd) {
            return [];
        }
        args.forEach((x, index) => {
            oneD = oneD + (x * (this.calcD(index)));
        });
        return oneD;
    }
    calcD(indx) {
        let result = 1;
        this.argMax.forEach((x, index) => {
            if (index <= indx) {
                return;
            }
            result = x * result;
        });
        return result;
    }
    calcDx(Xn) {
        let result = 0;
        Xn.forEach((x, index) => {
            result = result + (x * (index !== 0 ? (this.argMax.slice(index - 1, index).reduce((a, b) => a * b)) : 1));
        });
        return result;
    }
    calcDval(indx) {
        let result = 1;
        return indx === 0 ? 1 : this.argMax.slice(0, indx).reduce((a, b) => a * b);
    }
}

export default core;
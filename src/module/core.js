class core {
    constructor(...args) {
        this.obj = args;
        this.xMax = args[0];
        this.yMax = args[1];
        this.zMax = args[2];
    }
    to1D(x, y, z) {
        console.log(x+','+y+','+z+',');
        return (z * this.xMax * this.yMax) + (y * this.xMax) + x;
    }

    to3D(idx) {
        let z = Math.round( idx / (this.xMax * this.yMax));
        let idy =idx-( z * this.xMax * this.yMax);
        let y = Math.round(idy / this.xMax);
        let x = Math.round(idy % this.xMax);
        
        console.log(x+','+y+','+z+',');
        return { x, y, z };
    }
}

export default core;
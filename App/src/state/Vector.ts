export class Vector {
    constructor(x = 0, y = 0) {
        this.data[0] = x;
        this.data[1] = y;
    }

    clone() {
        let v = new Vector();
        v.data[0] = this.x;
        v.data[1] = this.y;
        
        return v;
    }

    data: number[] = [0, 0];

    get x() { return this.data[0]; }
    get y() { return this.data[1]; }

    set x(val: number) { this.data[0] = val; }
    set y(val: number) { this.data[1] = val; }

    subtract(vector: Vector): Vector {
        let v = new Vector(this.x, this.y);
        v.x -= vector.x;
        v.y -= vector.y;

        return v;
    }

    add(vector: Vector): Vector {
        let v = new Vector(this.x, this.y);
        v.x += vector.x;
        v.y += vector.y;

        return v;
    }

    equals(vector: Vector): Vector {
        this.x = vector.x;
        this.y = vector.y;

        return this;
    }
}

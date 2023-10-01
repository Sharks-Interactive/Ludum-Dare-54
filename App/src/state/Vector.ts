export class Vector {
    constructor(x = 0, y = 0) {
        this.data[0] = x;
        this.data[1] = y;
    }

    data: number[] = [0, 0];

    get x() { return this.data[0]; }
    get y() { return this.data[1]; }

    set x(val: number) { this.data[0] = val; }
    set y(val: number) { this.data[1] = val; }

    subtract(vector: Vector) {
        this.x -= vector.x;
        this.y -= vector.y;

        return this;
    }
    
    add(vector: Vector) {
        this.x += vector.x;
        this.y += vector.y;

        return this;
    }

    equals(vector: Vector) {
        this.x = vector.x;
        this.y = vector.y;

        return this;
    }
}

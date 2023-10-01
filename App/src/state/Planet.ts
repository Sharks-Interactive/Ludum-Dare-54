import { Vector } from "./Vector";

export class Planet {
    position: Vector;
    id: number;

    constructor(position = new Vector(), id = 0) {
        this.position = position;
        this.id = id;
    }    
}

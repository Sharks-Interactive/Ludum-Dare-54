import { Vector } from "./Vector";

export class Planet {
    position: Vector;
    size: Vector;
    id: number;
    name: string;
        
    connections: number[];

    constructor(position = new Vector(), id = 0, connections = [], size = Vector.square(Math.random() * 10 + 80), name = 'string') {
        this.position = position;
        this.connections = connections;
        this.size = size;
        this.name = name;
        this.id = id;
    }    
}

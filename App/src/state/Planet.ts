import type { Building } from "./Building";
import { Vector } from "./Vector";

export enum PlanetType {
    mineral,
    electrical,
    residential,
    commerce,
    fleet
}

export class Planet {
    position: Vector;
    size: Vector;
    id: number;
    name: string;

    type: PlanetType;
        
    connections: number[];
    buildings: Building[];
    built: Building[];

    constructor(position = new Vector(), id = 0, connections = [], size = Vector.square(Math.random() * 10 + 80), name = 'string', type = PlanetType.mineral) {
        this.position = position;
        this.connections = connections;
        this.size = size;
        this.name = name;
        this.type = type;
        this.id = id;

        this.buildings = [];
        this.built = [];
    }

    calculateEarnings(buildings: Building[]): number[] {
        let earnings = [0, 0, 0, 0];

        buildings.forEach(e => {
            earnings[0] += e.upkeep[0];
            earnings[1] += e.upkeep[1];
            earnings[2] += e.upkeep[2];
            earnings[3] += e.upkeep[3];
        });

        return earnings;
    }
}

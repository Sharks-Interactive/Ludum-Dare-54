import type { Building } from "./Building";
import { PlanetType, Planet } from "./Planet";

export class Ship {
    target: Planet | undefined;
    location: Planet;

    type: PlanetType;

    id: number;
    name: string;

    buildings: Building[];

    constructor(location: Planet, id = 0, name = 'fleet') {
        this.location = location;
        this.name = name;
        this.id = id;

        this.type = PlanetType.fleet;
        this.buildings = []; // Upgrades
    }
}

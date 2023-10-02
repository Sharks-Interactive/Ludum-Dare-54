import type { Planet } from "./Planet";

export class Ship {
    target: Planet | undefined;
    location: Planet;

    id: number;
    name: string;

    constructor(location: Planet, id = 0, name = 'fleet') {
        this.location = location;
        this.name = name;
        this.id = id;
    }
}

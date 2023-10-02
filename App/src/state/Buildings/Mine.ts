import { Building } from "../Building";

export class Mine extends Building {
    category = 'Dirt Moving';

    title = 'Mines';
    description = 'Authorise new mining operations on the planet.';

    cost = [2, 0, 0, 0];
    upkeep = [0, 0, -1, 2];
}

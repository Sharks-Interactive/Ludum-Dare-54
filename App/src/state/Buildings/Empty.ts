import { Building } from "../Building";

export class NewBuilding extends Building {
    category = '';

    title = '';
    description = '';

    cost = [0, 0, 0, 0];
    upkeep = [0, 0, 0, 0];
}

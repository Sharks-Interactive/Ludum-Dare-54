import { Building } from "../Building";

export class Markets extends Building {
    category = 'Trade';

    title = 'Mineral Markets';
    description = 'Establish intergalactic markets to help sell minerals from your empire.';

    cost = [2, 0, 0, 0];
    upkeep = [2, 0, 0, -1];
}

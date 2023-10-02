import { Building } from "../Building";

export class Park extends Building {
    category = 'Nature';

    title = 'Park';
    description = 'Construct a public park for citizens to hang out in.';

    cost = [2, 0, 0, 0];
    upkeep = [0, 0, 2, 0];
}

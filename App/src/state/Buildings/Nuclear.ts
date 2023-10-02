import { Building } from "../Building";

export class Nuclear extends Building {
    category = 'Power Production';

    title = 'Nuclear Power Plants';
    description = 'Generate massive amouns of electricity and waste. Citizens nearby dislike the construction of these.';

    cost = [2, 0, 0, 0];
    upkeep = [0, 5, -2, -2];
}

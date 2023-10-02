import type { Building } from "./Building";
import { Markets } from "./Buildings/Markets";
import { Mine } from "./Buildings/Mine";
import { Nuclear } from "./Buildings/Nuclear";
import { Park } from "./Buildings/Park";
import type { Planet } from "./Planet";

const mineralBuildings = [
    new Mine(),
    new Park()
];
const residentialBuildings = [
    new Park()
];
const commerceBuildings = [
    new Markets(),
    new Park()
];
const electricalBuildings = [
    new Nuclear(),
    new Park()
];

export function buildingsForPlanet(planet: Planet): Building[] {
    switch(planet.type.toString()) {
        case 'mineral':
            return mineralBuildings.filter(e => Math.random() * 5 > 1)

        case 'residential':
            return residentialBuildings.filter(e => Math.random() * 5 > 1)

        case 'commerce':
            return commerceBuildings.filter(e => Math.random() * 5 > 1)

        case 'electrical':
            return electricalBuildings.filter(e => Math.random() * 5 > 1)
        
        default:
            return residentialBuildings.filter(e => Math.random() * 5 > 1);
    }
}

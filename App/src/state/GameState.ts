import { buildingsForPlanet } from "./BuildingRegistry";
import { Planet, PlanetType } from "./Planet";
import { Ship } from "./Ship";
import { Vector } from "./Vector";

export class GameState {
    planets: Planet[];
    ships: Ship[];
    selected: Planet | Ship | undefined;
    stats: number[];

    turns: number;

    constructor() {
        this.planets = new Array(25).fill(new Planet());
        this.ships = [];
        this.stats = [15, 15, 15, 15];
        this.selected = undefined;

        this.turns = 0;

        this.genMap();
    }

    advance() {
        for (let index = 0; index < this.ships.length; index++) {
            const element = this.ships[index];
            
            if (element.target != undefined) {
                this.ships[index].location = element.target;
                this.ships[index].target = undefined;
            }
        }
    }

    genMap() {
        this.planets.forEach((e, i, arr) => {
            let pos = new Vector(Math.random() * 1500, Math.random() * 1500);
            if (i > 1) {
                let newPosition = () => {
                    pos = (arr as Planet[])[1].position.clone();

                    let angle = Math.random() * Math.PI * 2;
                    let radius = (Math.random() * 1500) + 500;
                    
                    pos.x += Math.cos(angle) * radius;
                    pos.y += Math.sin(angle) * radius;
                }
                let valid = (): boolean => {
                    for (let index = 0; index < arr.length; index++) {
                        const planet = arr[index] as Planet;
                        
                        if (pos.distance(planet.position) < 600) return false;
                    }

                    return true;
                }
                
                newPosition();
                while (!valid()) newPosition();
            }

            arr[i] = new Planet(pos, i);
        });

        this.planets.forEach((e, ind) => {
            let least = 10000, id = -1;

            this.planets.forEach(ex => {
                if (e.position.distance(ex.position) < least) {
                    if (e.id == ex.id) return; // Don't consider ourselves
                    if (ex.connections.length > 0 && ind < this.planets.length - 1) return; // Don't consider planets which already have connections

                    least = e.position.distance(ex.position);
                    id = ex.id;
                }
            });

            e.connections = [id];
        });

        this.planets.forEach(e => e.type = Object.values(PlanetType)[Math.round(Math.random() * 3)] as PlanetType)
        this.planets.forEach(e => e.buildings = buildingsForPlanet(e));

        const names = ['jeager', 'croissant', 'franch', 'awkee', 'pony', 'Giveron', 'candeline', 'baskurn', 'moopiter', 'goatre', 'quatre', 'woindre'];
        this.planets.forEach(e => e.name = names[Math.round(Math.random() * names.length - 1)]);

        this.ships = [new Ship(this.planets[0])];
    }
}

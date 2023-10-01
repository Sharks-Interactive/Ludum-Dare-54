import { Planet } from "./Planet";
import { Vector } from "./Vector";

export class GameState {
    planets: Planet[];
    selected: Planet | undefined;

    constructor() {
        this.planets = new Array(25).fill(new Planet()).map((e, i, arr) => {
            let pos = new Vector(Math.random() * 1500, Math.random() * 1500);
            if (i > 1) {
                pos = (arr as Planet[])[1].position.clone();

                let angle = Math.random() * Math.PI * 2;
                let radius = (Math.random() * 1500) + 500;
                
                pos.x += Math.cos(angle) * radius;
                pos.y += Math.sin(angle) * radius;
            }

            return new Planet(pos, i);
        });

        this.selected = undefined;
    }
}

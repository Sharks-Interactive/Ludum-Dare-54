import Matter from "matter-js";

export class Player {
    body: Matter.Body;
    orientation: number = 0;

    constructor() {
        this.body = Matter.Bodies.rectangle(
            window.screen.availWidth / 2,
            0,
            100,
            200,
        );

        Matter.Body.setVelocity(this.body, Matter.Vector.create(0, -0.5));
    }

    init() {
        window.addEventListener('deviceorientation', (event) => {
            this.orientation = event.beta ?? 0;
        });
    }

    render () {
        Matter.Body.translate(this.body, Matter.Vector.create(0, -0.5));
        Matter.Body.rotate(this.body, this.orientation * 0.01745329251);
    }
}

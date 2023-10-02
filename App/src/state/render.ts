import Matter from "matter-js";
import { Player } from "./player";

var Engine = Matter.Engine,
    Render = Matter.Render,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

const engine = Engine.create({
    gravity: { x: 0, y: 0 }
});

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.screen.availWidth,
        height: window.screen.availHeight,
        background: '#14181b'
    }
});

const player = new Player();

export function Init() {
    var boxA = Bodies.rectangle(400, 200, 80, 80);
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });


    Composite.add(engine.world, [boxA, boxB, player.body, ground]);
    Render.run(render);

    player.init();

    update();
}

export function update() {
    window.requestAnimationFrame(update);
    Engine.update(engine, 1000 / 60);

    player.render();

    Render.lookAt(render, player.body, { x: 200, y: 200 })
}

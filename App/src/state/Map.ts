import { Vector } from "./Vector";

const offsetVector = new Vector(-5000, -5000)

export function worldToMap(world: Vector) {
    return world.subtract(offsetVector);
}

export function mapToWorld(map: Vector) {
    return map.add(offsetVector);
}

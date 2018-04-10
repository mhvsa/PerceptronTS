import { Point } from "chart.js"

export class PointSet {

    map: Map<String, Point>;
    [Symbol.iterator]: () => {};

    constructor() {
        this.map = new Map();
        this[Symbol.iterator] = this.values;
    }


    add(point: Point) {
        var s = "" + point.x + "" + point.y;
        this.map.set(s, point);
    }

    values(): IterableIterator<Point> {
        return this.map.values();
    }

    public get length(): number {
        return this.map.size;
    }


}
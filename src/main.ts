import { Neuron, bipolar, unipolar, bipolarSigmoidal, unipolarSigmoidal } from "./lib/neuron";
import {PointSet} from "./utils/pointset"
import { getRandomArbitrary } from "./utils/random"
import {Point} from "chart.js"

export interface NeuralData { zolte: Point[], czarne: Point[], szolte: Point[], szielone: Point[], sniebieskie: Point[], sczerwone: Point[] }

export function main(): NeuralData {

    var w1, w2, b;
    var points = new PointSet();

    w1 = getRandomArbitrary(-100, 100);
    w2 = getRandomArbitrary(-100, 100);
    b = getRandomArbitrary(-100, 100);

    while (points.length < 100) {
        var x = getRandomArbitrary(-10, 10);
        var y = getRandomArbitrary(-10, 10);
        points.add({x,y});
    }

    let n1: Neuron = new Neuron(w1, w2, b, unipolar);
    let n2: Neuron = new Neuron(w1, w2, b, unipolarSigmoidal(1));

    let zolte: Point[] = [];
    let czarne: Point[] = [];

    let szolte: Point[] = [];
    let szielone: Point[] = [];
    let sniebieskie: Point[] = [];
    let sczerwone: Point[] = [];

    let size = points.length;

    for (var p of points.values()) {

        // let p = points.pop();
        let inputs: number[] = [p.x, p.y];

        let y = n1.getOutput(inputs);

        if (y == 0) {
            zolte.push(p);
        } else {
            czarne.push(p);
        }

        y = n2.getOutput(inputs);

        if (y < 0.25) {
            szolte.push(p);
        } else if (y < 0.5) {
            szielone.push(p);
        } else if (y < 0.75) {
            sniebieskie.push(p);
        } else {
            sczerwone.push(p);
        }

    }

    return { "zolte": zolte, "czarne": czarne, "szolte": szolte, "szielone": szielone, "sniebieskie": sniebieskie, "sczerwone": sczerwone }


}



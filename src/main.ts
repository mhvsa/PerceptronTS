import {Neuron, bipolar, unipolar, bipolarSigmoidal, unipolarSigmoidal} from "./lib/neuron";
import {PointSet} from "./utils/pointset"
import {getRandomArbitrary} from "./utils/random"
import {Point} from "chart.js"

export interface NeuralData {
    zolte: Point[],
    czarne: Point[],
    szolte: Point[],
    szielone: Point[],
    sniebieskie: Point[],
    sczerwone: Point[],
    n1: Neuron,
    n2: Neuron,
    points: PointSet
}

export function main(lambda: number): NeuralData {

    var w1 = 0, w2 = 0, b = 0;
    var points = new PointSet();

    w1 = getRandomArbitrary(-10, 10);
    w2 = getRandomArbitrary(-10, 10);
    b = getRandomArbitrary(-10, 10);

    console.log(`${w1} ${w2} ${b}`);

    while (points.length < 1000) {
        var x = getRandomArbitrary(-10, 10);
        var y = getRandomArbitrary(-10, 10);
        points.add({x, y});
    }

    let n1: Neuron = new Neuron(w1, w2, b, unipolar);
    let n2: Neuron = new Neuron(w1, w2, b, unipolarSigmoidal(lambda));

    let zolte: Point[] = [];
    let czarne: Point[] = [];

    let szolte: Point[] = [];
    let szielone: Point[] = [];
    let sniebieskie: Point[] = [];
    let sczerwone: Point[] = [];

    let size = points.length;

    for (var p of points.values()) {

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

    return {
        "zolte": zolte,
        "czarne": czarne,
        "szolte": szolte,
        "szielone": szielone,
        "sniebieskie": sniebieskie,
        "sczerwone": sczerwone,
        "n1": n1,
        "n2": n2,
        "points": points
    }


}

interface SigmaData {
    zolte: Point[],
    zielone: Point[],
    niebieskie: Point[],
    czerwone: Point[]
};

export function getValueForDiffrentSigma(points: PointSet, sigma: number, neuron: Neuron): SigmaData {

    let zolte: Point[] = [];
    let zielone: Point[] = [];
    let niebieskie: Point[] = [];
    let czerwone: Point[] = [];

    neuron.activationFunction = unipolarSigmoidal(sigma);
    let y: number;

    for (var p of points.values()) {

        let inputs: number[] = [p.x, p.y];

        y = neuron.getOutput(inputs);

        if (y < 0.25) {
            zolte.push(p);
        } else if (y < 0.5) {
            zielone.push(p);
        } else if (y < 0.75) {
            niebieskie.push(p);
        } else {
            czerwone.push(p);
        }

    }

    return {zolte, zielone, niebieskie, czerwone}
}
import * as React from "react";
import * as ReactDOM from "react-dom";

import {Header} from "./components/Header";
import {Chart} from "./components/Chart";
import {main, NeuralData} from "./main"


let lambda = parseFloat(prompt("Lambda = ", "1"));

let neuralData: NeuralData = main(lambda);

let dataset = [{
    label: "f(net) = 0",
    backgroundColor: "Yellow",
    pointRadius: 3,
    data: neuralData.zolte,
    fill: false,
    showLine: false
}, {
    label: "f(net) = 1",
    backgroundColor: "Black",
    pointRadius: 3,
    data: neuralData.czarne,
    fill: false,
    showLine: false
}];

ReactDOM.render(
    <Header neuron={`w1 = ${neuralData.n1.weights[0]}, w2 = ${neuralData.n1.weights[1]}, bias = ${neuralData.n1.bias}`}
            type="Unipolarna"/>,
    document.getElementById("prog-uni")
);

ReactDOM.render(
    <Chart dataset={dataset} neuron={neuralData.n1}/>,
    document.getElementById("chart1")
);

dataset = [{
    label: "f(net) < 0.25",
    backgroundColor: "Yellow",
    pointRadius: 3,
    data: neuralData.szolte,
    fill: false,
    showLine: false
}, {
    label: "f(net) < 0.5",
    backgroundColor: "Green",
    pointRadius: 3,
    data: neuralData.szielone,
    fill: false,
    showLine: false
}, {
    label: "f(net) < 0.75",
    backgroundColor: "Blue",
    pointRadius: 3,
    data: neuralData.sniebieskie,
    fill: false,
    showLine: false
}, {
    label: "f(net) < 1",
    backgroundColor: "Red",
    pointRadius: 3,
    data: neuralData.sczerwone,
    fill: false,
    showLine: false
}];

ReactDOM.render(
    <Header
        neuron={`w1 = ${neuralData.n2.weights[0]}, w2 = ${neuralData.n2.weights[1]}, bias = ${neuralData.n2.bias}, lambda = ${lambda}`}
        type="Unipolarna sigmoidalna"/>,
    document.getElementById("sigm-uni")
);

ReactDOM.render(
    <Chart dataset={dataset} neuron={neuralData.n2}/>,
    document.getElementById("chart2")
);


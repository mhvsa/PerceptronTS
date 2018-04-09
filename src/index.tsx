import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Chart, ChartProps } from "./components/Chart";

import { main, NeuralData } from "./main"
import { Point } from "chart.js"

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);


let neuralData: NeuralData = main();

// let data = [].concat(neuralData.zolte, neuralData.czarne, neuralData.szolte, neuralData.szielone, neuralData.sniebieskie, neuralData.sczerwone);
let data: Point[][] = [neuralData.zolte, neuralData.czarne];
let colors:any[] = [];

var color = {
    "Yellow": "rgba(255,255,0,1)",
    "Black": "rgba(0,0,0,1)"
}


// for (var i = 0; i < neuralData.zolte.length; i++) {
    // colors.push(color.Yellow);
// }
// for (var i = 0; i < neuralData.czarne.length; i++) {
    // colors.push(color.Black);
// }

// let props = {"data":data,"colors":colors}

let props: ChartProps = { data, colors }

let element = new Chart(props);

ReactDOM.render(
    React.createElement(Chart, props),
    document.getElementById("chart")
);

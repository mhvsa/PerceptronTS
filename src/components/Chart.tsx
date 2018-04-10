import * as React from "react";
import {Component, ReactNode} from "react";
import {Line, Bar, Scatter} from "react-chartjs-2"
import {Point} from "chart.js";
import {Neuron} from "../lib/neuron";

export interface ChartProps {
    dataset: any[],
    neuron: Neuron
};

export interface ChartState {
    chartData: any,
    options: any,
    line: Point[];
};

export class Chart extends Component<ChartProps, ChartState> {

    constructor(props: ChartProps) {
        super(props);
        let values = this.setLine(props);
        let chartData = {
            datasets: [{
                label: "Neuron",
                backgroundColor: "Red",
                pointRadius: 0,
                data: values,
                fill: false,
                showLine: true,
                showPoints: false,
                borderColor: "Red"
            }].concat(this.props.dataset)
        };
        let options = {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        };
        this.state = {
            chartData: chartData,
            options: options,
            line: values
        }

    }

    private setLine(props: ChartProps) {
        let values: Point[] = [];
        let a = props.neuron.weights[0];
        let b = props.neuron.weights[1];
        let c = props.neuron.bias;

        let f = function (x: number) {
            return (a * x) / (-1 * (b)) + c / (-1 * (b));
        };

        for (let i = -1000; i < 1000; i++) {
            let y = f(i / 100);
            if (y <= 10 && y > -10) {
                values.push({x: i / 100, y: y});
            }
        }
        return values;
    }

    render(): ReactNode {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        )
    }
}
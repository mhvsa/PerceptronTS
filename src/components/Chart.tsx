import * as React from "react";
import { Component, ReactNode } from "react";
import { Line, Bar, Scatter } from "react-chartjs-2"
import { Point } from "chart.js";

// interface ChartState = 
export interface ChartProps { data: Point[][], colors: any[] };
export interface ChartState { chartData: any, options: any };

export class Chart extends Component<ChartProps, ChartState> {

    constructor(props: ChartProps) {
        super(props);
        this.state = {
            chartData: {
                datasets: [{
                    label: "Yellow",
                    backgroundColor: "Yellow",
                    pointRadius: 3,
                    data: props.data[0],
                    fill: false
                },{
                    label: "Black",
                    backgroundColor: "Black",
                    pointRadius: 3,
                    data: props.data[1],
                    fill: false
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                },
                showLines: false,
            }
        }

    }

    render(): ReactNode {
        return (
            <div className="chart">
                <Scatter
                    data={this.state.chartData}
                    options={this.state.options}
                />
            </div>
        )
    }
}
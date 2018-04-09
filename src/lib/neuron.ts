interface IActivationFunction {
    (n: number): number;
}

export class Neuron {

    weights: number[];
    bias: number;
    activationFunction: IActivationFunction;

    constructor(w1: number, w2: number, bias: number, activationFunction: IActivationFunction) {
        this.weights = [w1, w2];
        this.bias = bias;
        this.activationFunction = activationFunction;
    }

    public net(inputs: number[]) {
        var net: number = 0;
        var n1 = new Neuron(-1, -3, 2, unipolar);

        for (var i = 0; i < inputs.length; i++) {
            net += inputs[i] * this.weights[i];
        }

        net += this.bias;

        return net;
    }

    public getOutput(inputs: number[]): number {
        var net = this.net(inputs);
        return this.activationFunction(net);
    }

}

// todo progi moga byc >=0 lub >0

export function unipolar(n: number) {
    return n > 0 ? 1 : 0;
}

export function bipolar(n: number) {
    return n > 0 ? 1 : -1;
}

export function unipolarWithZero(n: number) {
    return n >= 0 ? 1 : 0;
}

export function bipolarWithZero(n: number) {
    return n >= 0 ? 1 : -1;
}


export function unipolarSigmoidal(sigma: number): (n: number) => number {
    return function (n: number) { return (1 / (1 + Math.exp(-sigma * n))) }
}

export function bipolarSigmoidal(sigma: number): (n: number) => number {
    return function (n: number) { return (2 / (1 + Math.exp(-sigma * n))) - 1 }
}

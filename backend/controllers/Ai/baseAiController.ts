import * as brain from 'brain.js';

export class BaseAiController {

    static async getFirstNetwork() {

        // const net = new Brain.NeuralNetwork();
        //
        // net.train([{input: { b: 5, w: 0, r: 1.2 }, output: { black: 1, red: 1, white: 0 }},
        //     {input: { b: 0.3, w: 0.9, r: 0.99 }, output: { black: 0, red: 0, white: 0 }},
        //     {input: { b: 1.0, w: 12, r: 1.2 }, output: { black: 1, red: 1, white: 1 }},
        //     {input: { b: 0, w: 0, r: 10 }, output: { black: 0, red: 1, white: 0 }}]);
        //
        // const output = net.run({ b: 5, w: 12, r: 0 });

        const trainingData = [
            'Jane saw Doug.',
            'Doug saw Jane.',
            'Spot saw Doug and Jane looking at each other.',
            'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
        ];

        const lstm = new brain.recurrent.LSTM();
        const result = lstm.train(trainingData, {
            iterations: 150,
            log: details => console.log(details),
            errorThresh: 0.011
        });
        const run1 = lstm.run('Jane');
        const run2 = lstm.run('Doug');
        const run3 = lstm.run('Spot');
        const run4 = lstm.run('It');

        console.log('run 1: Jane' + run1);
        console.log('run 2: Doug' + run2);
        console.log('run 3: Spot' + run3);
        console.log('run 4: It' + run4);

        return {
            run1:  run1,
            run2:  run2,
            run3: run3,
            run4: run4,
            result : result
        };
    }
}

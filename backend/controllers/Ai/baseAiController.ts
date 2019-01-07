import * as brain from 'brain.js';
import { Stream } from 'stream';
// import * as Stream from 'streem';

export class BaseAiController {



    static async getFirstNetwork() {

        const readableStream = new Stream.Transform;

        const trainingData = [
            'Jane saw Doug.',
            'Doug saw Jane.',
            'Spot saw Doug and Jane looking at each other.',
            'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
        ];

        readableStream.sendobj = {
            run1: '',
            run2: '',
            run3: '',
            run4: '',
            array: []
        };

        const arrayw: any[] = [];

        const lstm = new brain.recurrent.LSTM();
        const result = lstm.train(trainingData, {
            iterations: 550,
            log: (details) => {
                arrayw.push(details);
                console.log(details);
            },
            errorThresh: 0.011
        });

        console.log(result);



        readableStream.sendobj.run1.pipe(lstm.run('Jane'));
        readableStream.sendobj.run2.pipe(lstm.run('Doug'));
        readableStream.sendobj.run3.pipe(lstm.run('Spot'));
        readableStream.sendobj.run4.pipe(lstm.run('It'));
        readableStream.sendobj.array.pipe(arrayw);

        console.log(readableStream.sendobj);

        return 'good';
    }
}

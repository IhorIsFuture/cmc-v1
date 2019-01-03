import * as Router from 'koa-router';
import { BaseAiController } from './../../controllers/Ai/baseAiController';


const Ai = new Router();

Ai.get('/', async (ctx) => {
    const result = await BaseAiController.getFirstNetwork();

    ctx.status = 200;
    ctx.body = result;

});


export { Ai };

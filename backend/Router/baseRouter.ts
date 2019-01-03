import * as Router from 'koa-router';
import { User } from './Users/user';
import { Ai } from './Ai/ai';

const baseRouter = new Router();

baseRouter.get('/', async (ctx) => {
    ctx.body = 'Hi base route';
});

baseRouter.use('/users',  User.routes());
baseRouter.use('/ai',  Ai.routes());

export { baseRouter };

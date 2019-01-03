import * as Koa from 'koa';
import * as Router from 'koa-router';
import { baseRouter } from './Router/baseRouter';
import * as Http from 'http';

const app = new Koa();
const router = new Router();

app.use(baseRouter.routes());


Http.createServer(app.callback()).listen(3000);

console.log('Server create on 3000');


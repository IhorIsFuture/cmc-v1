import * as Koa from 'koa';
import { baseRouter } from './Router/baseRouter';
import * as Http from 'http';

const app = new Koa();

app.use(baseRouter.routes());


Http.createServer(app.callback()).listen(3000);

console.log('Server create on 3000');


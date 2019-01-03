import * as Router from 'koa-router';

const User = new Router();

User.get('/', async (ctx) => {
    ctx.body = 'users';
});

export { User };

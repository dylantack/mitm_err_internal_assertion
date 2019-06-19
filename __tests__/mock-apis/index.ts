import Router from 'koa-router';
import bodyparser from 'koa-bodyparser';
import Koa from 'koa';
import Mitm from 'mitm';

export default function() {
    const mitm = Mitm();

    mitm.on('request', (req, res) => {
        stripeHandler(req, res);
    });

    return mitm;
}

const router = new Router();
router.post('/v1/subscription_items/:item_id/usage_records', async ctx => {
    const { quantity, timestamp } = ctx.request.body as any;
    ctx.body = {
        id: 'mbur_12345' ,
        object: 'usage_record',
        livemode: false,
        quantity,
        subscription_item: 'si_12345',
        timestamp,
    };
});

const stripeHandler = new Koa()
    .use(bodyparser())
    .use(router.routes())
    .callback();
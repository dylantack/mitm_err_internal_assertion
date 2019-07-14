import Mitm from 'mitm';
import Stripe from 'stripe';

Mitm().on('request', (req, res) => {
    res.end(JSON.stringify({id:'hello'.repeat(50)}));
});

const doTest = async () => {
    await new Stripe('key').usageRecords.create('id', {
        quantity: 10,
        timestamp: 10,
    });
};

for (let i=1; i < 100; i++) {
    test(`test ${i}`, doTest);
}

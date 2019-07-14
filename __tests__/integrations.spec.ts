import Mitm from 'mitm';
import Stripe from 'stripe';

const mitm = Mitm();
mitm.on('request', (req, res) => {
    res.end(JSON.stringify({id:'hello'.repeat(50)}));
});

const doTest = async () => {
    const s = new Stripe('key');
    const usage = await s.usageRecords.create('id', {
        quantity: 10,
        timestamp: 10,
    });
    expect(usage.id).toContain('hello');
};

for (let i=1; i < 100; i++) {
    test(`test ${i}`, doTest);
}

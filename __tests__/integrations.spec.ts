import apiMocker from './mock-apis';
import Stripe from 'stripe';

let mock: ReturnType<typeof apiMocker>;
beforeAll(async () => {
    mock = apiMocker();
});

afterAll(() => {
    mock.disable();
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

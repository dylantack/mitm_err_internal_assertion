import apiMocker from './mock-apis';
import Stripe from 'stripe';

let mock: ReturnType<typeof apiMocker>;
beforeAll(async () => {
    mock = apiMocker();
});

afterAll(() => {
    mock.disable();
});

test('post usage 1', async () => {
    const s = new Stripe('key');
    const usage = await s.usageRecords.create('id', {
        action: 'increment',
        quantity: 10,
        timestamp: 10,
    });
    expect(usage.id).toContain('mbur');
});

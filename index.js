var Mitm = require("mitm");
var Stripe = require("stripe");

Mitm().on('request', (req, res) => {
    res.end(JSON.stringify({id:'hello'.repeat(50)}));
});

async function main() {
    for (let i=1; i < 100; i++) {
        await new Stripe('key').usageRecords.create('id', {
            quantity: 10,
            timestamp: 10,
        });
    }
}

main();
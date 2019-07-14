const Mitm = require("mitm");
const https = require("https");


Mitm().on('request', (req, res) => {
    res.end(JSON.stringify({id:'hello'.repeat(50)}));
});

const agent = new https.Agent({keepAlive: true});
const request = () => {
    return new Promise((resolve, reject) => {
        https.get('https://example.com', {agent}, (res) => {
            res.on('data', d => {});
            res.on('end', resolve);
        });
    });
}

async function main() {
    for (let i=1; i < 100; i++) {
        const foo = await request();
    }
}

main();
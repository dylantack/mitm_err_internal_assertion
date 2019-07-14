const Mitm = require("mitm");
const https = require("https");


Mitm().on('request', (req, res) => {
    res.end('hello'.repeat(50));
});

const agent = new https.Agent({keepAlive: true});

(async () => {
    for (let i=1; i < 100; i++) {
        await new Promise((resolve, reject) => {
            https.get('https://example.com', {agent}, (res) => {
                res.on('data', d => {});
                res.on('end', resolve);
            });
        });
    }
})();

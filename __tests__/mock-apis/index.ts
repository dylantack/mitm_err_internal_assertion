import Mitm from 'mitm';

export default function() {
    const mitm = Mitm();

    mitm.on('request', (req, res) => {
        res.statusCode = 200;
        res.end(JSON.stringify({id:'hello'.repeat(50)}));
    });

    return mitm;
}

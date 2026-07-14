const express = require('express');
const app = express();
app.use(express.json());

// Die Domain-Liste im RAM (Hier tragen Sie die Seiten ein)
const domains = {
    "dingle.it": "127.0.0.1",
    "meineseite.rizz": "127.0.0.1"
};

// Route für den Napture-Browser
app.get('/domains/:name/:tld', (req, res) => {
    const ip = domains[`${req.params.name}.${req.params.tld}`];
    if (ip) return res.json({ ip });
    res.status(404).json({ error: "Domain nicht gefunden" });
});

app.listen(3000, () => console.log('Web X DNS läuft auf Port 3000'));

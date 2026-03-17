const express = require('express');
const app = express();
const port = 3000;
const metricsController = require('./controllers/metrics.js');
app.use('/metrics', metricsController);
app.listen(port, () => {
    console.log(`FluxForge API listening on port ${port}
`);
});
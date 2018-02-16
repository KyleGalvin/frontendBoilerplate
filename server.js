const path = require("path");
const express = require("express");
const compression = require("compression");

const app = express();
const indexPath = path.join(__dirname, '../index.html')
app.use(express.static('./dist'))
app.use(compression());
app.get('/', function (_, res) { res.sendFile(indexPath) });
app.get('*', function (_, res) { res.sendFile(indexPath) });
const port = (process.env.PORT || 80);
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
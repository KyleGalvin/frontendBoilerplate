const path = require("path");
const express = require("express");

const app = express();
const indexPath = path.join(__dirname, '../index.html')
app.use(express.static('./dist'))
app.get('/', function (_, res) { res.sendFile(indexPath) })
const port = (process.env.PORT || 8080)
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
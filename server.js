import * as path from "path";
import * as express from "express";

const app = express();
const indexPath = path.join(__dirname, '/../index.html')
const publicPath = express.static(path.join(__dirname, '../public'))
app.use('/public', publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })
const port = (process.env.PORT || 8080)


if (process.env.NODE_ENV !== 'production') {
  import * as webpack from "webpack";
  import * as webpackDevMiddleware from "webpack-dev-middleware";
  import * as webpackHotMiddleware from "webpack-hot-middleware";
  const config = require('../webpack.dev.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
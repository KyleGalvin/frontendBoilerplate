import * as bunyan from "bunyan";
import Config from "../config/confManager";
import * as ConsoleStream from "console-stream";

var logger = bunyan.createLogger({
    name: 'play',
    streams: [
        {
            level: 'info',
            stream: ConsoleStream as bunyan.Stream,
            type: 'raw'
        }
    ]
});

export default logger;
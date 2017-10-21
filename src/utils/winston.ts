import * as bunyan from "browser-bunyan";

var logger = bunyan.createLogger({
    name: 'myLogger',
    streams: [
        {
            level: 'info',
            stream: new bunyan.ConsoleFormattedStream()
        }
    ],
    serializers: bunyan.stdSerializers,
    src: true
});

export default logger;
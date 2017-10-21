import * as bunyan from "browser-bunyan";

export default (filename: string) => {
  return bunyan.createLogger({
    name: filename,
    streams: [
      {
        level: 'info',
        stream: new bunyan.ConsoleFormattedStream()
      }
    ],
    serializers: bunyan.stdSerializers,
    src: true
  });
};
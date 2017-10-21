//built from https://github.com/KyleGalvin/console-stream/blob/master/index.js

declare module "console-stream" {
	function write(buffer: Buffer): void;
	function destroy(): void;
	function end(buffer: Buffer): void;
}

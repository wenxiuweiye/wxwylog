import BrowserLogger from "../lib/BrowserLogger";
import { Logger } from "../lib/Logger";

class ServerLogger implements Logger {
  title?: string | undefined;
  debug(msg: any): void {
    throw new Error("Method not implemented.");
  }
  log(msg: any): void {
    throw new Error("Method not implemented.");
  }
}

const logger = new BrowserLogger();

logger.log("this is logger");

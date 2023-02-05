import type Logger from "./Logger";

export default class ServerLogger implements Logger {
  title?: string | undefined;
  debug(msg: any): void {
    console.log(msg)
  }
  log(msg: any): void {
    console.log(msg)
  }
}

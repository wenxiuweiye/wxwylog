interface Logger {
  title?: string;

  debug(msg: any): void;
  log(msg: any): void;
}

export default Logger;

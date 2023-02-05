import  type Logger  from "./Logger";
import type StyleObject from './StyleObject';
export default class BrowserLogger implements Logger {
  title?: string | undefined;
  private _style?: StyleObject | undefined;
    public get style(): StyleObject | undefined {
        return this._style;
    }
    public set style(value: StyleObject | undefined) {
        this._style = value;
    }
  constructor(title?: string, style?: StyleObject | undefined) {
    this.title = title || "BrowserLogger";
      this.style = style || {
        color: "yellowgreen",
        background_color: "gray",
        border_radius: "2px",
        margin: "10px",
      }
  }

  debug(msg: any): void {
    const style = this.style;
    console.debug(
      `${this.title} %c${msg}`,
      `color:${style?.color};background:${style?.background_color};border-radius:${style?.border_radius};margin:${style?.margin}`
    );
  }
  log(msg: any): void {
    const style = this.style;
    console.log(
      `${this.title} %c${msg}`,
      `color:${style?.color};background:${style?.background_color};border-radius:${style?.border_radius};margin:${style?.margin}`
    );
  }
}

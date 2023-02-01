import {Logger,StyleObject} from './Logger';
export default class BrowserLogger implements Logger {
    title?: string | undefined;
    style?: StyleObject;
    constructor(title?: string,style?: StyleObject | undefined){
        this.title = title||"BrowserLogger",
        this.style = style||{color:"yellowgreen",background_color:"gray",border_radius:"2px",margin:"10px"}
    }

    debug(msg: any): void {
        const style  = this.style
        console.debug(`${this.title} %c${msg}`,`color:${style?.color};background:${style?.background_color};border-radius:${style?.border_radius};margin:${style?.margin}`)
    }
    log(msg: any): void {
        const style  = this.style 
        console.log(`${this.title} %c${msg}`,`color:${style?.color};background:${style?.background_color};border-radius:${style?.border_radius};margin:${style?.margin}`)
    }
}
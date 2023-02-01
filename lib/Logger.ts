interface StyleObject {
    color: string,
    background_color:string,
    border_radius:string,
    margin:string
  }
  
  interface Logger {
      title?:string,
  
    debug(msg: any): void;
    log(msg: any): void;
  }



export {Logger,StyleObject}
import StyleObject from "./StyleObject";

class Preset implements StyleObject {
    color: string;
    background_color: string;
    border_radius: string;
    margin: string;

    constructor(color: string,background_color: string,border_radius: string,margin: string){
        this.color = color
        this.background_color = background_color
        this.border_radius = border_radius
        this.margin = margin
    }
}

function presetGreen(){
    return new Preset("green","yellowgreen","","")
}
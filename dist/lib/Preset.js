var Preset = /** @class */ (function () {
    function Preset(color, background_color, border_radius, margin) {
        this.color = color;
        this.background_color = background_color;
        this.border_radius = border_radius;
        this.margin = margin;
    }
    return Preset;
}());
function presetGreen() {
    return new Preset("green", "yellowgreen", "", "");
}
export {};

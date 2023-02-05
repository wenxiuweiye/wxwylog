var BrowserLogger = /** @class */ (function () {
    function BrowserLogger(title, style) {
        this.title = title || "BrowserLogger";
        this.style = style || {
            color: "yellowgreen",
            background_color: "gray",
            border_radius: "2px",
            margin: "10px",
        };
    }
    Object.defineProperty(BrowserLogger.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            this._style = value;
        },
        enumerable: false,
        configurable: true
    });
    BrowserLogger.prototype.debug = function (msg) {
        var style = this.style;
        console.debug("".concat(this.title, " %c").concat(msg), "color:".concat(style === null || style === void 0 ? void 0 : style.color, ";background:").concat(style === null || style === void 0 ? void 0 : style.background_color, ";border-radius:").concat(style === null || style === void 0 ? void 0 : style.border_radius, ";margin:").concat(style === null || style === void 0 ? void 0 : style.margin));
    };
    BrowserLogger.prototype.log = function (msg) {
        var style = this.style;
        console.log("".concat(this.title, " %c").concat(msg), "color:".concat(style === null || style === void 0 ? void 0 : style.color, ";background:").concat(style === null || style === void 0 ? void 0 : style.background_color, ";border-radius:").concat(style === null || style === void 0 ? void 0 : style.border_radius, ";margin:").concat(style === null || style === void 0 ? void 0 : style.margin));
    };
    return BrowserLogger;
}());
export default BrowserLogger;

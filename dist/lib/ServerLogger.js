var ServerLogger = /** @class */ (function () {
    function ServerLogger() {
    }
    ServerLogger.prototype.debug = function (msg) {
        console.log(msg);
    };
    ServerLogger.prototype.log = function (msg) {
        console.log(msg);
    };
    return ServerLogger;
}());
export default ServerLogger;

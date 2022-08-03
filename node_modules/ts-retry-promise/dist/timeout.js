"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
exports.timeout = function (millies, f) {
    if (millies === "INFINITELY") {
        return f(function () { return false; });
    }
    var done = false;
    var doneF = function () { return done; };
    return new Promise(function (resolve, reject) {
        var timeoutRef = setTimeout(function () {
            done = true;
            reject(new Error("Timeout after " + millies + "ms"));
        }, millies);
        var result = f(doneF);
        // result.finally(() => clearTimeout(timeoutRef));
        result.then(function (r) {
            resolve(r);
            clearTimeout(timeoutRef);
        }, function (e) {
            reject(e);
            clearTimeout(timeoutRef);
        });
    });
};
//# sourceMappingURL=timeout.js.map
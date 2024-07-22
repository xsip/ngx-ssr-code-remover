"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOnServe = RemoveOnServe;
require("reflect-metadata");
function RemoveOnServe() {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("remove-on-serve", true, target, propertyKey);
    };
}
//# sourceMappingURL=decorator.js.map
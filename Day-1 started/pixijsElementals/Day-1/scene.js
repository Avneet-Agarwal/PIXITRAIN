"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Scene = void 0;
var pixi_js_1 = require("pixi.js");
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(screenWidth, screenHeight) {
        var _this = _super.call(this) || this;
        // see how members of the class need `this.`?
        _this.screenWidth = screenWidth;
        _this.screenHeight = screenHeight;
        // Now clampy is a class member, we will be able to use it in another methods!
        _this.clampy = pixi_js_1.Sprite.from("clampy.png");
        _this.clampy.anchor.set(0.5);
        _this.clampy.x = _this.screenWidth / 2;
        _this.clampy.y = _this.screenHeight / 2;
        _this.addChild(_this.clampy);
        return _this;
    }
    return Scene;
}(pixi_js_1.Container));
exports.Scene = Scene;

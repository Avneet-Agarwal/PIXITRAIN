"use strict";
exports.__esModule = true;
var pixi_js_1 = require("pixi.js");
var scene_1 = require("./scene"); // This is the import statement
var app = new pixi_js_1.Application({
    view: document.getElementById("pixi-canvas"),
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x6495ed,
    width: 640,
    height: 480
});
// pass in the screen size to avoid "asking up"
var sceny = new scene_1.Scene(app.screen.width, app.screen.height);
app.stage.addChild(sceny);

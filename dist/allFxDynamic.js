"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var childStag_1 = require("./animations/childStag");
var absolutes_1 = require("./animations/absolutes");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
exports.fxArray = childStag_1.childStags.concat(absolutes_1.triggers, fade_1.triggers, bounce_1.triggers, rotate_1.triggers, slide_1.triggers, zoom_1.triggers);
//# sourceMappingURL=allFxDynamic.js.map
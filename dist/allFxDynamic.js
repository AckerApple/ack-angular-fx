"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childStag_1 = require("./animations/childStag");
const absolutes_1 = require("./animations/absolutes");
const fade_1 = require("./animations/fade");
const bounce_1 = require("./animations/bounce");
const rotate_1 = require("./animations/rotate");
const slide_1 = require("./animations/slide");
const zoom_1 = require("./animations/zoom");
exports.animations = [
    ...childStag_1.childStags,
    ...absolutes_1.triggers,
    ...fade_1.triggers,
    ...bounce_1.triggers,
    ...rotate_1.triggers,
    ...slide_1.triggers,
    ...zoom_1.triggers
];

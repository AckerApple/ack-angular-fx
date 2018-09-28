"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getConfigTiming(config) {
    return [
        (config.duration || 500) + 'ms',
        (config.delay || 0) + 'ms',
        (config.easing || 'linear')
    ].join(' ');
}
exports.getConfigTiming = getConfigTiming;
//# sourceMappingURL=helpers.js.map
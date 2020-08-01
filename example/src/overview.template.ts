export const string = "<h2>All Supported Animations</h2><div style=\"text-align:center;padding:1em;font-size:0.75em;line-height:0;\"><a (click)=\"onToggleInAll()\" style=\"cursor:pointer\">toggle all</a></div><div class=\"wrap\" [@childStag]=\"fxCount\"><div class=\"demo-wrap\" (click)=\"allFx.fadeInOut = !allFx.fadeInOut\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInOut\" [@fadeInOut]=\"{value:allFx.fadeInOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#8e83ac'}\" style=\"text-align:center;\">fadeInOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInOutDown = !allFx.fadeInOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInOutDown\" [@fadeInOutDown]=\"{value:allFx.fadeInOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#3eefc5'}\" style=\"text-align:center;\">fadeInOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInOutLeft = !allFx.fadeInOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInOutLeft\" [@fadeInOutLeft]=\"{value:allFx.fadeInOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7aff01'}\" style=\"text-align:center;\">fadeInOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInOutRight = !allFx.fadeInOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInOutRight\" [@fadeInOutRight]=\"{value:allFx.fadeInOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#3c6f32'}\" style=\"text-align:center;\">fadeInOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInOutUp = !allFx.fadeInOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInOutUp\" [@fadeInOutUp]=\"{value:allFx.fadeInOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#3fee9a'}\" style=\"text-align:center;\">fadeInOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInOut = !allFx.bounceInOut\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInOut\" [@bounceInOut]=\"{value:allFx.bounceInOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#c13416'}\" style=\"text-align:center;\">bounceInOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInOutDown = !allFx.bounceInOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInOutDown\" [@bounceInOutDown]=\"{value:allFx.bounceInOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#8baa8e'}\" style=\"text-align:center;\">bounceInOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInOutLeft = !allFx.bounceInOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInOutLeft\" [@bounceInOutLeft]=\"{value:allFx.bounceInOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a6c9ef'}\" style=\"text-align:center;\">bounceInOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInOutRight = !allFx.bounceInOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInOutRight\" [@bounceInOutRight]=\"{value:allFx.bounceInOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#c05dcf'}\" style=\"text-align:center;\">bounceInOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInOutUp = !allFx.bounceInOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInOutUp\" [@bounceInOutUp]=\"{value:allFx.bounceInOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#eba3de'}\" style=\"text-align:center;\">bounceInOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInOut = !allFx.rotateInOut\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInOut\" [@rotateInOut]=\"{value:allFx.rotateInOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#eefb0a'}\" style=\"text-align:center;\">rotateInOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInOutDownLeft = !allFx.rotateInOutDownLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInOutDownLeft\" [@rotateInOutDownLeft]=\"{value:allFx.rotateInOutDownLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#3e80f4'}\" style=\"text-align:center;\">rotateInOutDownLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInOutDownRight = !allFx.rotateInOutDownRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInOutDownRight\" [@rotateInOutDownRight]=\"{value:allFx.rotateInOutDownRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f52155'}\" style=\"text-align:center;\">rotateInOutDownRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInOutUpLeft = !allFx.rotateInOutUpLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInOutUpLeft\" [@rotateInOutUpLeft]=\"{value:allFx.rotateInOutUpLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a820fa'}\" style=\"text-align:center;\">rotateInOutUpLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInOutUpRight = !allFx.rotateInOutUpRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInOutUpRight\" [@rotateInOutUpRight]=\"{value:allFx.rotateInOutUpRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#447067'}\" style=\"text-align:center;\">rotateInOutUpRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInOutUp = !allFx.slideInOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.slideInOutUp\" [@slideInOutUp]=\"{value:allFx.slideInOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#19dbcd'}\" style=\"text-align:center;\">slideInOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInOutDown = !allFx.slideInOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.slideInOutDown\" [@slideInOutDown]=\"{value:allFx.slideInOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#d7e5f2'}\" style=\"text-align:center;\">slideInOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInOutLeft = !allFx.slideInOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.slideInOutLeft\" [@slideInOutLeft]=\"{value:allFx.slideInOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#229f43'}\" style=\"text-align:center;\">slideInOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInOutRight = !allFx.slideInOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.slideInOutRight\" [@slideInOutRight]=\"{value:allFx.slideInOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#fe065d'}\" style=\"text-align:center;\">slideInOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInOut = !allFx.zoomInOut\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInOut\" [@zoomInOut]=\"{value:allFx.zoomInOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#42a1d8'}\" style=\"text-align:center;\">zoomInOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInOutDown = !allFx.zoomInOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInOutDown\" [@zoomInOutDown]=\"{value:allFx.zoomInOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#d51ac5'}\" style=\"text-align:center;\">zoomInOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInOutLeft = !allFx.zoomInOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInOutLeft\" [@zoomInOutLeft]=\"{value:allFx.zoomInOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#98a677'}\" style=\"text-align:center;\">zoomInOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInOutRight = !allFx.zoomInOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInOutRight\" [@zoomInOutRight]=\"{value:allFx.zoomInOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a3c429'}\" style=\"text-align:center;\">zoomInOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInOutUp = !allFx.zoomInOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInOutUp\" [@zoomInOutUp]=\"{value:allFx.zoomInOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#10a442'}\" style=\"text-align:center;\">zoomInOutUp</div></div></div><br/><h4>In Only Animations</h4><div style=\"text-align:center;padding:1em;font-size:0.75em;line-height:0;\"><a (click)=\"onToggleInAll()\" style=\"cursor:pointer\">toggle all</a></div><div class=\"wrap\" [@childStag]=\"fxCount\"><div class=\"demo-wrap\" (click)=\"allFx.fadeIn = !allFx.fadeIn\"><div class=\"demo-item\" *ngIf=\"allFx.fadeIn\" [@fadeIn]=\"{value:allFx.fadeIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#92b209'}\" style=\"text-align:center;\">fadeIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInDown = !allFx.fadeInDown\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInDown\" [@fadeInDown]=\"{value:allFx.fadeInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f3deaf'}\" style=\"text-align:center;\">fadeInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInLeft = !allFx.fadeInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInLeft\" [@fadeInLeft]=\"{value:allFx.fadeInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f89d16'}\" style=\"text-align:center;\">fadeInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInRight = !allFx.fadeInRight\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInRight\" [@fadeInRight]=\"{value:allFx.fadeInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#cf8036'}\" style=\"text-align:center;\">fadeInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeInUp = !allFx.fadeInUp\"><div class=\"demo-item\" *ngIf=\"allFx.fadeInUp\" [@fadeInUp]=\"{value:allFx.fadeInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#4089b4'}\" style=\"text-align:center;\">fadeInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceIn = !allFx.bounceIn\"><div class=\"demo-item\" *ngIf=\"allFx.bounceIn\" [@bounceIn]=\"{value:allFx.bounceIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#e21193'}\" style=\"text-align:center;\">bounceIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInDown = !allFx.bounceInDown\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInDown\" [@bounceInDown]=\"{value:allFx.bounceInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#9b718b'}\" style=\"text-align:center;\">bounceInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInLeft = !allFx.bounceInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInLeft\" [@bounceInLeft]=\"{value:allFx.bounceInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#c97b76'}\" style=\"text-align:center;\">bounceInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInRight = !allFx.bounceInRight\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInRight\" [@bounceInRight]=\"{value:allFx.bounceInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#9a841a'}\" style=\"text-align:center;\">bounceInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceInUp = !allFx.bounceInUp\"><div class=\"demo-item\" *ngIf=\"allFx.bounceInUp\" [@bounceInUp]=\"{value:allFx.bounceInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#e8456'}\" style=\"text-align:center;\">bounceInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateIn = !allFx.rotateIn\"><div class=\"demo-item\" *ngIf=\"allFx.rotateIn\" [@rotateIn]=\"{value:allFx.rotateIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#71259d'}\" style=\"text-align:center;\">rotateIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInDownLeft = !allFx.rotateInDownLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInDownLeft\" [@rotateInDownLeft]=\"{value:allFx.rotateInDownLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#c4a960'}\" style=\"text-align:center;\">rotateInDownLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInDownRight = !allFx.rotateInDownRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInDownRight\" [@rotateInDownRight]=\"{value:allFx.rotateInDownRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#771ed7'}\" style=\"text-align:center;\">rotateInDownRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInUpLeft = !allFx.rotateInUpLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInUpLeft\" [@rotateInUpLeft]=\"{value:allFx.rotateInUpLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f3d7db'}\" style=\"text-align:center;\">rotateInUpLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateInUpRight = !allFx.rotateInUpRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateInUpRight\" [@rotateInUpRight]=\"{value:allFx.rotateInUpRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#694527'}\" style=\"text-align:center;\">rotateInUpRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInUp = !allFx.slideInUp\"><div class=\"demo-item\" *ngIf=\"allFx.slideInUp\" [@slideInUp]=\"{value:allFx.slideInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#60a0cd'}\" style=\"text-align:center;\">slideInUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInDown = !allFx.slideInDown\"><div class=\"demo-item\" *ngIf=\"allFx.slideInDown\" [@slideInDown]=\"{value:allFx.slideInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#bd10d2'}\" style=\"text-align:center;\">slideInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInLeft = !allFx.slideInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.slideInLeft\" [@slideInLeft]=\"{value:allFx.slideInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a879b6'}\" style=\"text-align:center;\">slideInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideInRight = !allFx.slideInRight\"><div class=\"demo-item\" *ngIf=\"allFx.slideInRight\" [@slideInRight]=\"{value:allFx.slideInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f92ee4'}\" style=\"text-align:center;\">slideInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomIn = !allFx.zoomIn\"><div class=\"demo-item\" *ngIf=\"allFx.zoomIn\" [@zoomIn]=\"{value:allFx.zoomIn && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#206b82'}\" style=\"text-align:center;\">zoomIn</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInDown = !allFx.zoomInDown\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInDown\" [@zoomInDown]=\"{value:allFx.zoomInDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f209ab'}\" style=\"text-align:center;\">zoomInDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInLeft = !allFx.zoomInLeft\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInLeft\" [@zoomInLeft]=\"{value:allFx.zoomInLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a2bbc2'}\" style=\"text-align:center;\">zoomInLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInRight = !allFx.zoomInRight\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInRight\" [@zoomInRight]=\"{value:allFx.zoomInRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#86012d'}\" style=\"text-align:center;\">zoomInRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomInUp = !allFx.zoomInUp\"><div class=\"demo-item\" *ngIf=\"allFx.zoomInUp\" [@zoomInUp]=\"{value:allFx.zoomInUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7a817a'}\" style=\"text-align:center;\">zoomInUp</div></div></div><br/><h4>Out Only Animations</h4><div style=\"text-align:center;padding:1em;font-size:0.75em;line-height:0;\"><a (click)=\"onToggleInAll()\" style=\"cursor:pointer\">toggle all</a></div><div class=\"wrap\" [@childStag]=\"fxCount\"><div class=\"demo-wrap\" (click)=\"allFx.fadeOut = !allFx.fadeOut\"><div class=\"demo-item\" *ngIf=\"allFx.fadeOut\" [@fadeOut]=\"{value:allFx.fadeOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#77ff78'}\" style=\"text-align:center;\">fadeOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeOutDown = !allFx.fadeOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.fadeOutDown\" [@fadeOutDown]=\"{value:allFx.fadeOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#fc36fe'}\" style=\"text-align:center;\">fadeOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeOutLeft = !allFx.fadeOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.fadeOutLeft\" [@fadeOutLeft]=\"{value:allFx.fadeOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#4b91bd'}\" style=\"text-align:center;\">fadeOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeOutRight = !allFx.fadeOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.fadeOutRight\" [@fadeOutRight]=\"{value:allFx.fadeOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f5d541'}\" style=\"text-align:center;\">fadeOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.fadeOutUp = !allFx.fadeOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.fadeOutUp\" [@fadeOutUp]=\"{value:allFx.fadeOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#31dfea'}\" style=\"text-align:center;\">fadeOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceOut = !allFx.bounceOut\"><div class=\"demo-item\" *ngIf=\"allFx.bounceOut\" [@bounceOut]=\"{value:allFx.bounceOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#f56e81'}\" style=\"text-align:center;\">bounceOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceOutDown = !allFx.bounceOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.bounceOutDown\" [@bounceOutDown]=\"{value:allFx.bounceOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#10af1f'}\" style=\"text-align:center;\">bounceOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceOutLeft = !allFx.bounceOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.bounceOutLeft\" [@bounceOutLeft]=\"{value:allFx.bounceOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#ed4159'}\" style=\"text-align:center;\">bounceOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceOutRight = !allFx.bounceOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.bounceOutRight\" [@bounceOutRight]=\"{value:allFx.bounceOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#8fc96c'}\" style=\"text-align:center;\">bounceOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.bounceOutUp = !allFx.bounceOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.bounceOutUp\" [@bounceOutUp]=\"{value:allFx.bounceOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#6552eb'}\" style=\"text-align:center;\">bounceOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateOut = !allFx.rotateOut\"><div class=\"demo-item\" *ngIf=\"allFx.rotateOut\" [@rotateOut]=\"{value:allFx.rotateOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#3b84f2'}\" style=\"text-align:center;\">rotateOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateOutDownLeft = !allFx.rotateOutDownLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateOutDownLeft\" [@rotateOutDownLeft]=\"{value:allFx.rotateOutDownLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#973a5f'}\" style=\"text-align:center;\">rotateOutDownLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateOutDownRight = !allFx.rotateOutDownRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateOutDownRight\" [@rotateOutDownRight]=\"{value:allFx.rotateOutDownRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#d19a98'}\" style=\"text-align:center;\">rotateOutDownRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateOutUpLeft = !allFx.rotateOutUpLeft\"><div class=\"demo-item\" *ngIf=\"allFx.rotateOutUpLeft\" [@rotateOutUpLeft]=\"{value:allFx.rotateOutUpLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a0ad9d'}\" style=\"text-align:center;\">rotateOutUpLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.rotateOutUpRight = !allFx.rotateOutUpRight\"><div class=\"demo-item\" *ngIf=\"allFx.rotateOutUpRight\" [@rotateOutUpRight]=\"{value:allFx.rotateOutUpRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#91a775'}\" style=\"text-align:center;\">rotateOutUpRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideOutUp = !allFx.slideOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.slideOutUp\" [@slideOutUp]=\"{value:allFx.slideOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#a8ad3a'}\" style=\"text-align:center;\">slideOutUp</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideOutDown = !allFx.slideOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.slideOutDown\" [@slideOutDown]=\"{value:allFx.slideOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#e4f560'}\" style=\"text-align:center;\">slideOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideOutLeft = !allFx.slideOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.slideOutLeft\" [@slideOutLeft]=\"{value:allFx.slideOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#93998f'}\" style=\"text-align:center;\">slideOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.slideOutRight = !allFx.slideOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.slideOutRight\" [@slideOutRight]=\"{value:allFx.slideOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#fb9840'}\" style=\"text-align:center;\">slideOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomOut = !allFx.zoomOut\"><div class=\"demo-item\" *ngIf=\"allFx.zoomOut\" [@zoomOut]=\"{value:allFx.zoomOut && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#ed0172'}\" style=\"text-align:center;\">zoomOut</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomOutDown = !allFx.zoomOutDown\"><div class=\"demo-item\" *ngIf=\"allFx.zoomOutDown\" [@zoomOutDown]=\"{value:allFx.zoomOutDown && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#9c0d92'}\" style=\"text-align:center;\">zoomOutDown</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomOutLeft = !allFx.zoomOutLeft\"><div class=\"demo-item\" *ngIf=\"allFx.zoomOutLeft\" [@zoomOutLeft]=\"{value:allFx.zoomOutLeft && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#2624e6'}\" style=\"text-align:center;\">zoomOutLeft</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomOutRight = !allFx.zoomOutRight\"><div class=\"demo-item\" *ngIf=\"allFx.zoomOutRight\" [@zoomOutRight]=\"{value:allFx.zoomOutRight && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#7ff309'}\" style=\"text-align:center;\">zoomOutRight</div></div><div class=\"demo-wrap\" (click)=\"allFx.zoomOutUp = !allFx.zoomOutUp\"><div class=\"demo-item\" *ngIf=\"allFx.zoomOutUp\" [@zoomOutUp]=\"{value:allFx.zoomOutUp && fxCount, params:{time:fxTime}}\" [ngStyle]=\"{'background-color': '#885109'}\" style=\"text-align:center;\">zoomOutUp</div></div></div><div style=\"background-color:#CCC;padding:.5em;text-align:center\">Change above fx speed:&nbsp;<input [(ngModel)]=\"fxTime\"/></div>"
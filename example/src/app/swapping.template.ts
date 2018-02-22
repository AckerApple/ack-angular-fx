export const string = "<h2>Swapping</h2><p>Tap a box below</p><fx-tracker [value]=\"swapIndex\" [(fxId)]=\"fxId\"></fx-tracker><h3>@[absoluteKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' && fxId, params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' && fxId, params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' && fxId, params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' && fxId, params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' && fxId, params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' && fxId, params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' && fxId, params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' && fxId, params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' && fxId, params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' && fxId, params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' && fxId, params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' && fxId, params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' && fxId, params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' && fxId, params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' && fxId, params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' && fxId, params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' && fxId, params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' && fxId, params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' && fxId, params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' && fxId, params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' && fxId, params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' && fxId, params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' && fxId, params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' && fxId, params:{time:fxTime}}\" [@absoluteKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;height:260px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"fxId\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;height:280px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea></div><h3>@[absoluteInKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteInKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' && fxId, params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' && fxId, params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' && fxId, params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' && fxId, params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' && fxId, params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' && fxId, params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' && fxId, params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' && fxId, params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' && fxId, params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' && fxId, params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' && fxId, params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' && fxId, params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' && fxId, params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' && fxId, params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' && fxId, params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' && fxId, params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' && fxId, params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' && fxId, params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' && fxId, params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' && fxId, params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' && fxId, params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' && fxId, params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' && fxId, params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' && fxId, params:{time:fxTime}}\" [@absoluteInKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;height:260px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteInKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"fxId\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;height:280px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteInKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea></div><h3>@[absoluteOutKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteOutKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' && fxId, params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' && fxId, params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' && fxId, params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' && fxId, params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' && fxId, params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' && fxId, params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' && fxId, params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' && fxId, params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' && fxId, params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' && fxId, params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' && fxId, params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' && fxId, params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' && fxId, params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' && fxId, params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' && fxId, params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' && fxId, params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' && fxId, params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' && fxId, params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' && fxId, params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' && fxId, params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' && fxId, params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' && fxId, params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' && fxId, params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' && fxId, params:{time:fxTime}}\" [@absoluteOutKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;height:260px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteOutKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"fxId\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;height:280px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteOutKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div"+
"\n    *ngFor = \"let x of swapArray\""+
"\n    [@{{FxSession.fxForward}}] = \"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\""+
"\n  &gt;"+
"\n    item:x"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea></div><h3>Relative Wrapping</h3><p>Perfect swap animation for router-outlet. Uses css position:relative to contain animations</p><fieldset><legend>&lt;div [@absoluteKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><div style=\"position:relative;overflow:hidden;display:inline-block;width:130px;height:130px;margin:5px;\"><div class=\"demo-wrap\" style=\"margin:0em;\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' && fxId, params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' && fxId, params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' && fxId, params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' && fxId, params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' && fxId, params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' && fxId, params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' && fxId, params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' && fxId, params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' && fxId, params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' && fxId, params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' && fxId, params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' && fxId, params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' && fxId, params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' && fxId, params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' && fxId, params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' && fxId, params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' && fxId, params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' && fxId, params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' && fxId, params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' && fxId, params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' && fxId, params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' && fxId, params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' && fxId, params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' && fxId, params:{time:fxTime}}\" [@absoluteKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-item\" *ngIf=\"swapIndex==index\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">*ngFor:{{ index }}</div></ng-container></div></div><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample</h4><textarea style=\"width:100%;height:260px;\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker("+
"\n  \"[value]\"     = \"swapIndex\""+
"\n  \"[(fxId)]\"    = \"fxId\""+
"\n)&gt;&lt;/fx-tracker&gt;"+
"\n"+
"\n&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
"\n    back"+
"\n  &lt;/button&gt;"+
"\n  &lt;div style=\"position:relative;overflow:hidden;\"&gt;"+
"\n    &lt;div"+
"\n      *ngFor = \"let x of swapArray\""+
"\n      [@{{FxSession.fxForward}}] = \"fxId\""+
"\n    &gt;"+
"\n      item:x"+
"\n    &lt;/div&gt;"+
"\n  &lt;/div&gt;"+
"\n  &lt;button (click)=\"swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\"&gt;"+
"\n    next"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea></div>"
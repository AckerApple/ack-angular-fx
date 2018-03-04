export const string = "<h2>Swapping</h2><p>Tap a box below</p><h3>@[absoluteKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@absoluteKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\" [@fadeIn]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDown]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeft]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRight]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUp]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceIn]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDown]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeft]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRight]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUp]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateIn]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeft]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRight]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeft]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRight]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUp]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDown]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeft]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRight]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomIn]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDown]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeft]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRight]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUp]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n</textarea></div><h3>@[absoluteInKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteInKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@absoluteInKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\" [@fadeIn]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDown]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeft]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRight]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUp]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceIn]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDown]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeft]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRight]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUp]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateIn]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeft]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRight]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeft]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRight]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUp]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDown]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeft]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRight]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomIn]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDown]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeft]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRight]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUp]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteInKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteInKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n</textarea></div><h3>@[absoluteOutKids]</h3><p>Change children position during animation</p><fieldset><legend>&lt;div [@absoluteOutKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@absoluteOutKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-wrap\" *ngIf=\"swapIndex==index\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\" [@fadeIn]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDown]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeft]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRight]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUp]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceIn]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDown]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeft]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRight]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUp]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateIn]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeft]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRight]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeft]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRight]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUp]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDown]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeft]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRight]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomIn]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDown]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeft]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRight]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUp]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\">*ngFor:{{ index }}</div></div></ng-container><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample 1</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteOutKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteOutKids]=\"&#123;value:fxId, params:&#123;time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
"\n</textarea></div><h3>Relative Wrapping</h3><p>Perfect swap animation for router-outlet. Uses css position:relative to contain animations</p><fieldset><legend>&lt;div [@absoluteKids]=\"{{ fxId }}\"&gt;</legend><div class=\"wrap\"><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\">back</div></div><div style=\"position:relative;overflow:hidden;display:inline-block;width:130px;height:130px;margin:5px;\"><div class=\"demo-wrap\" style=\"margin:0em;\" [@fadeInKids]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDownKids]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeftKids]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRightKids]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUpKids]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInKids]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDownKids]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeftKids]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRightKids]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUpKids]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInKids]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeftKids]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRightKids]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeftKids]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRightKids]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUpKids]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDownKids]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeftKids]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRightKids]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInKids]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDownKids]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeftKids]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRightKids]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUpKids]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@absoluteKids]=\"{value:fxId, params:{time:fxTime, position:fxPosition}}\"><ng-container *ngFor=\"let x of swapArray;let index=index\"><div class=\"demo-item\" *ngIf=\"swapIndex==index\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\" [@fadeIn]=\"{value:FxSession.fxForward=='fadeIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInDown]=\"{value:FxSession.fxForward=='fadeInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInLeft]=\"{value:FxSession.fxForward=='fadeInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInRight]=\"{value:FxSession.fxForward=='fadeInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@fadeInUp]=\"{value:FxSession.fxForward=='fadeInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceIn]=\"{value:FxSession.fxForward=='bounceIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInDown]=\"{value:FxSession.fxForward=='bounceInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInLeft]=\"{value:FxSession.fxForward=='bounceInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInRight]=\"{value:FxSession.fxForward=='bounceInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@bounceInUp]=\"{value:FxSession.fxForward=='bounceInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateIn]=\"{value:FxSession.fxForward=='rotateIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeft]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInDownRight]=\"{value:FxSession.fxForward=='rotateInDownRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeft]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@rotateInUpRight]=\"{value:FxSession.fxForward=='rotateInUpRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInUp]=\"{value:FxSession.fxForward=='slideInUp' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInDown]=\"{value:FxSession.fxForward=='slideInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInLeft]=\"{value:FxSession.fxForward=='slideInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@slideInRight]=\"{value:FxSession.fxForward=='slideInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomIn]=\"{value:FxSession.fxForward=='zoomIn' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInDown]=\"{value:FxSession.fxForward=='zoomInDown' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInLeft]=\"{value:FxSession.fxForward=='zoomInLeft' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInRight]=\"{value:FxSession.fxForward=='zoomInRight' ? fxId : 'nofx', params:{time:fxTime}}\" [@zoomInUp]=\"{value:FxSession.fxForward=='zoomInUp' ? fxId : 'nofx', params:{time:fxTime}}\">*ngFor:{{ index }}</div></ng-container></div></div><div class=\"demo-wrap\"><div class=\"demo-item\" (click)=\"fxId=fxId===true?1:true;swapIndex = swapIndex==swapArray.length-1 ? 0 : swapIndex+1\">next</div></div></div></fieldset><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center;\"><div style=\"display:inline-block;\"><sub>position</sub><div><select [(ngModel)]=\"fxPosition\"><option *ngFor=\"let item of positions\" [value]=\"item\">{{item}}</option></select></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>fx</sub><div><select-fx [(model)]=\"FxSession.fxForward\"></select-fx></div></div>&nbsp;&nbsp;&nbsp;<div style=\"display:inline-block;\"><sub>speed</sub><div><input [(ngModel)]=\"fxTime\"/></div></div></div><h4>Code Sample</h4><textarea style=\"width:100%;\" rows=\"17\" wrap=\"off\" readonly=\"readonly\">&lt;div [@absoluteKids]=\"&#123;value:fxId, params:&#123;position:'{{fxPosition}}', time:'{{fxTime}}'&#125;&#125;\"&gt;"+
"\n  &lt;button (click)=\"fxId=fxId===false?0:false;swapIndex = !swapIndex ? swapArray.length-1 : swapIndex-1\"&gt;"+
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
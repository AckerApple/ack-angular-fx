export const string = "<h2>*ngIf Fx</h2><p>Tap anywhere below</p><div (click)=\"hideToggle=!hideToggle\"><fieldset><legend>*ngIf=\"{{!hideToggle}}\"</legend><div *ngIf=\"!hideToggle\" style=\"text-align:center;padding:1em;background-color: #339966;\" [@fadeIn]=\"{value:FxSession.fxForward=='fadeIn' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeOut]=\"{value:FxSession.fxForward=='fadeOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInOut]=\"{value:FxSession.fxForward=='fadeInOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInDown]=\"{value:FxSession.fxForward=='fadeInDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeOutDown]=\"{value:FxSession.fxForward=='fadeOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInOutDown]=\"{value:FxSession.fxForward=='fadeInOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInLeft]=\"{value:FxSession.fxForward=='fadeInLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeOutLeft]=\"{value:FxSession.fxForward=='fadeOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInOutLeft]=\"{value:FxSession.fxForward=='fadeInOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInRight]=\"{value:FxSession.fxForward=='fadeInRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeOutRight]=\"{value:FxSession.fxForward=='fadeOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInOutRight]=\"{value:FxSession.fxForward=='fadeInOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInUp]=\"{value:FxSession.fxForward=='fadeInUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeOutUp]=\"{value:FxSession.fxForward=='fadeOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@fadeInOutUp]=\"{value:FxSession.fxForward=='fadeInOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceIn]=\"{value:FxSession.fxForward=='bounceIn' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceOut]=\"{value:FxSession.fxForward=='bounceOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInOut]=\"{value:FxSession.fxForward=='bounceInOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInDown]=\"{value:FxSession.fxForward=='bounceInDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceOutDown]=\"{value:FxSession.fxForward=='bounceOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInOutDown]=\"{value:FxSession.fxForward=='bounceInOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInLeft]=\"{value:FxSession.fxForward=='bounceInLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceOutLeft]=\"{value:FxSession.fxForward=='bounceOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInOutLeft]=\"{value:FxSession.fxForward=='bounceInOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInRight]=\"{value:FxSession.fxForward=='bounceInRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceOutRight]=\"{value:FxSession.fxForward=='bounceOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInOutRight]=\"{value:FxSession.fxForward=='bounceInOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInUp]=\"{value:FxSession.fxForward=='bounceInUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceOutUp]=\"{value:FxSession.fxForward=='bounceOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@bounceInOutUp]=\"{value:FxSession.fxForward=='bounceInOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateIn]=\"{value:FxSession.fxForward=='rotateIn' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateOut]=\"{value:FxSession.fxForward=='rotateOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInOut]=\"{value:FxSession.fxForward=='rotateInOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInDownLeft]=\"{value:FxSession.fxForward=='rotateInDownLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateOutDownLeft]=\"{value:FxSession.fxForward=='rotateOutDownLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInOutDownLeft]=\"{value:FxSession.fxForward=='rotateInOutDownLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInDownRight]=\"{value:FxSession.fxForward=='rotateInDownRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateOutDownRight]=\"{value:FxSession.fxForward=='rotateOutDownRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInOutDownRight]=\"{value:FxSession.fxForward=='rotateInOutDownRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInUpLeft]=\"{value:FxSession.fxForward=='rotateInUpLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateOutUpLeft]=\"{value:FxSession.fxForward=='rotateOutUpLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInOutUpLeft]=\"{value:FxSession.fxForward=='rotateInOutUpLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInUpRight]=\"{value:FxSession.fxForward=='rotateInUpRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateOutUpRight]=\"{value:FxSession.fxForward=='rotateOutUpRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@rotateInOutUpRight]=\"{value:FxSession.fxForward=='rotateInOutUpRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInUp]=\"{value:FxSession.fxForward=='slideInUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideOutUp]=\"{value:FxSession.fxForward=='slideOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInOutUp]=\"{value:FxSession.fxForward=='slideInOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInDown]=\"{value:FxSession.fxForward=='slideInDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideOutDown]=\"{value:FxSession.fxForward=='slideOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInOutDown]=\"{value:FxSession.fxForward=='slideInOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInLeft]=\"{value:FxSession.fxForward=='slideInLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideOutLeft]=\"{value:FxSession.fxForward=='slideOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInOutLeft]=\"{value:FxSession.fxForward=='slideInOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInRight]=\"{value:FxSession.fxForward=='slideInRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideOutRight]=\"{value:FxSession.fxForward=='slideOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@slideInOutRight]=\"{value:FxSession.fxForward=='slideInOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomIn]=\"{value:FxSession.fxForward=='zoomIn' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomOut]=\"{value:FxSession.fxForward=='zoomOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInOut]=\"{value:FxSession.fxForward=='zoomInOut' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInDown]=\"{value:FxSession.fxForward=='zoomInDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomOutDown]=\"{value:FxSession.fxForward=='zoomOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInOutDown]=\"{value:FxSession.fxForward=='zoomInOutDown' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInLeft]=\"{value:FxSession.fxForward=='zoomInLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomOutLeft]=\"{value:FxSession.fxForward=='zoomOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInOutLeft]=\"{value:FxSession.fxForward=='zoomInOutLeft' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInRight]=\"{value:FxSession.fxForward=='zoomInRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomOutRight]=\"{value:FxSession.fxForward=='zoomOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInOutRight]=\"{value:FxSession.fxForward=='zoomInOutRight' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInUp]=\"{value:FxSession.fxForward=='zoomInUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomOutUp]=\"{value:FxSession.fxForward=='zoomOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\" [@zoomInOutUp]=\"{value:FxSession.fxForward=='zoomInOutUp' ? !hideToggle : 'nofx', params:{time:fxTime}}\"><br/>[@{{FxSession.fxForward}}] =&nbsp;"+
"\n&#123;value:{{!hideToggle}}, params:&#123;time:'{{fxTime}}'&#125;&#125;<br/><br/></div></fieldset></div><div style=\"background-color:#CCC;padding:.5em;\"><div style=\"text-align:center\"><button (click)=\"hideToggle=!hideToggle\">{{ hideToggle ? 'SHOW' : 'hide' }}</button>&nbsp;&nbsp;&nbsp;"+
"\nSpeed:<input [(ngModel)]=\"fxTime\"/>&nbsp;&nbsp;&nbsp;"+
"\nChange above fx Type:&nbsp;<select-fx [(model)]=\"FxSession.fxForward\"> </select-fx></div><p>DETAILS: The above fx example defines:</p><ul><li>An fxType as a trigger name</li><li>A value to ignite animation</li><li>A value to toggle the *ngIf</li><li>A time defintion passed through as fx params</li></ul><h4>Code Sample 1</h4><textarea style=\"width:100%;height:60px\" wrap=\"off\" readonly=\"readonly\">&lt;div *ngIf=\"boolean\" [@{{FxSession.fxForward}}]=\"boolean\" &gt;"+
"\n  hide show div"+
"\n&lt;/div&gt;</textarea><h4>Code Sample 2</h4><textarea style=\"width:100%;height:100px\" wrap=\"off\" readonly=\"readonly\">&lt;div"+
"\n  *ngIf=\"boolean\""+
"\n  [@{{FxSession.fxForward}}] = \"&#123;value:boolean, params:&#123;time:'{{fxTime}}'&#125;&#125;\""+
"\n&gt;"+
"\n  hide show div"+
"\n&lt;/div&gt;</textarea></div>"
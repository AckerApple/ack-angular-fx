export const string = "<h3>Simplest Example</h3>Learn the basics below<textarea style=\"width:100%\" rows=\"3\" wrap=\"off\" readonly=\"readonly\">&lt;div [@fadeInUpKids]=\"routerOutlet.activated ? routerOutlet.activatedRoute.toString() : null\"&gt;"+
"\n  &lt;router-outlet #routerOutlet=\"outlet\"&gt;&lt;/router-outlet&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea><h3>Perfect Swap Example</h3>A few more settings yields a more stylish display<textarea style=\"width:100%\" rows=\"9\" wrap=\"off\" readonly=\"readonly\">&lt;div"+
"\n  [@fadeInUpKids]   = \"routerOutlet.activated ? routerOutlet.activatedRoute.toString() : null\""+
"\n  (@fadeInUpKids.start) = \"inFx=true\""+
"\n  (@fadeInUpKids.done) = \"inFx=false\""+
"\n  [@absoluteKids] = \"inFx\""+
"\n  [ngStyle] = \"inFx ? 'position:relative;overflow:hidden;height:100%' : null\""+
"\n&gt;"+
"\n  &lt;router-outlet #routerOutlet=\"outlet\"&gt;&lt;/router-outlet&gt;"+
"\n&lt;/div&gt;"+
"\n</textarea><h3>Advanced Swap Back/Forth</h3>More code will yield a sophisticated back and forth swap as route history is recorded and converted into an fxId representing user back and forth navigation<textarea style=\"width:100%\" rows=\"15\" wrap=\"off\" readonly=\"readonly\">&lt;fx-tracker"+
"\n  [(fxId)]       = \"fxId\""+
"\n  [activatedRoute] = \"routerOutlet.activated ? routerOutlet.activatedRoute : null\""+
"\n&gt;&lt;fx-tracker&gt;"+
"\n"+
"\n&lt;div"+
"\n  [@fadeInUpKids]   = \"{value:fxId, params:{time:'500ms'}}\""+
"\n  [@absoluteKids] = \"{value:fxId, params:{time:'500ms', position:'fixed'}}\""+
"\n  (@absoluteKids.start) = \"inFx=true\""+
"\n  (@absoluteKids.done) = \"inFx=false\""+
"\n  [ngStyle] = \"inFx ? 'position:relative;overflow:hidden;height:100%' : null\""+
"\n&gt;"+
"\n  &lt;router-outlet #routerOutlet=\"outlet\"&gt;&lt;/router-outlet&gt;"+
"\n&lt;/div&gt;</textarea>"
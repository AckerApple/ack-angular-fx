# Description

Angular animations made easy. [Example Page](https://ackerapple.github.io/ack-angular-fx)

[![hire me](https://ackerapple.github.io/resume/assets/images/hire-me-badge.svg)](https://ackerapple.github.io/resume/)
[![npm version](https://badge.fury.io/js/ack-angular-fx.svg)](http://badge.fury.io/js/ack-angular-fx)
[![npm downloads](https://img.shields.io/npm/dm/ack-angular-fx.svg)](https://npmjs.org/ack-angular-fx)
[![Dependency Status](https://david-dm.org/ackerapple/ack-angular-fx.svg)](https://david-dm.org/ackerapple/ack-angular-fx)

![animated gif](https://ackerapple.github.io/ack-angular-fx/assets/fireworks.gif "gumball fireworks")

> Angular 5.2.0+ required

<details>
  <summary>Table of Contents</summary>

- [Install](#install)
  - [Requirements](#requirements)
- [Include](#include)
- [Browser Compatibility](#browser-compatibility)
- [Examples](#examples)
  - [Robust Example](#robust-example)
  - [Params Example](#params-example)
- [Stagger](#stagger)
- [Supported Animations](#supported-animations)
- [Prebuild Fxs to Single File](#prebuild-fxs-to-single-file)
- [Work on This Project](#work-on-this-project)
  - [Building Example](#building-example)
- [Credits](#credits)
- [Resources](#resources)

</details>

# Install

## Requirements
Since you're using Angular, the following are expected to already be installed:

- reflect-metadata
- @angular/core
- @angular/animations

install command:
```bash
npm install ack-angular-fx --save-dev
```

# Include
Animations must be injected into your components and this is how to do that

```typescript
import { animations } from "ack-angular-fx";
import { Component } from "@angular/core"

@Component({
  animations:animations,
  template:`
    <div *ngIf="boolean" [@fadeInOutUp]="boolean">
      ...
    </div>
    <button (click)="boolean=!boolean">
      hide or show
    </button>
  `
}) export class AppComponent
```


# Browser Compatibility

All good!

Angular animations have come a long way. In the past, they didn't work in Safari without including additional libraries. Now, all animations appear to be working anywhere that Angular could be run.


# Examples

[View interactive example page here.](https://ackerapple.github.io/ack-angular-fx)

## Robust Example
This example has pretty much everything needed to boot

> NOTE: AckFxModule, in code below, is only needed IF directive fx-tracker being used for back-n-forth swap animation tracking

```typescript
import "zone.js"
import "reflect-metadata"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { animations } from "ack-angular-fx";

//NOTE: This line only needed IF directive fx-tracker used (back-n-forth swap animations)
import { AckFxModule } from "ack-angular-fx";
  
import { supportDocument } from "ack-angular-fx/web-animations.min"

supportDocument( document )//cross browser fx support

@Component({
  animations:animations,
  template:`
    <div *ngIf="boolean" [@rotateInOut]="boolean">
      ...
    </div>
    <button (click)="boolean=!boolean">
      hide or show
    </button>
  `
}) export class AppComponent

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AckFxModule//NOTE: This line only needed IF directive fx-tracker used (back-n-forth swap animations)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
}) export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule)
```

## Params Example
The configuration options available to define for animations

```html
<div [@zoomInOut]="{value:boolean, params:{time:'2000ms 0 linear'}}">
  ...
</div>
```

Learn more about [Angular animation timing here](https://angular.io/guide/animations#animation-timing)

# Stagger
Offset multiple animations using Angular 4.2.4 or greater

Currently, staggering animations using ack-angular-fx, is controlled by a parent stagger definition and child animations subscribing to that via the css class "childFx"

#### Stagger Items Example
A parent container staggering child animations whenever the array adds or removes elements
```html
<div [@childStag]="array.length">
  <div
    *ngFor = "let x of array"
    [@rotateInOut] = "1"
  >
    <div>
      ngFor loop with animations for each
    </div>
  </div>
</div>
```

#### Stagger Table Rows Example
A table element staggering row animations whenever "rowStaggers" variable changes value
```html
<table style="width:100%" [@childStag]="array.length">
  <ng-container *ngFor="let x of array">
    <tr [@bounceInOut]="array.length" style="background-color:#CCC">
      <td>{{ x }}</td>
      <td>Item Row {{ x }}</td>
    </tr>
  </ng-container>
</table>
```

# Supported Animations

- fadeIn
  - fadeInDown, fadeInLeft, fadeInRight, fadeInUp
- fadeOut
  - fadeOutDown, fadeOutLeft, fadeOutRight, fadeOutUp
- fadeInOut
  - fadeInOutDown, fadeInOutLeft, fadeInOutRight, fadeInOutUp
- bounceIn
  - bounceInDown, bounceInLeft, bounceInRight, bounceInUp
- bounceOut
  - bounceOutDown, bounceOutLeft, bounceOutRight, bounceOutUp
- bounceIn
  - bounceInOutDown, bounceInOutLeft, bounceInOutRight, bounceInOutUp
- rotateIn
  - rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight
- rotateOut
  - rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft, rotateOutUpRight
- rotateInOut
  - rotateInOutDownLeft, rotateInOutDownRight, rotateInOutUpLeft, rotateInOutUpRight
- zoomIn
  - zoomInDown, zoomInLeft, zoomInRight, zoomInUp
- zoomOut
  - zoomOutDown, zoomOutLeft, zoomOutRight, zoomOutUp
- zoomInOut
  - zoomInOutDown, zoomInOutLeft, zoomInOutRight, zoomInOutUp
- slideInDown, slideInLeft, slideInRight, slideInUp
- slideOutDown, slideOutLeft, slideOutRight, slideOutUp
- slideInOutDown, slideInOutLeft, slideInOutRight, slideInOutUp

see online demo https://ackerapple.github.io/ack-angular-fx

## Prebuild Fxs to Single File
Known as the prefx process, ack-angular-fx has cli commands to bundle animations to file

> This often helps with bundling issues and Angular AOT compilation

### Example Compile All Animations to One File

Step 1 : Add the following to your package.json scripts
```javascript
"scripts":{
  "build:prefx": "ack-angular-fx --out ./src/prefx.ts"
}
```

Step 2 : Now, run the following in a command prompt terminal
```bash
npm run build:prefx
```
> After the above command you should now see a prefx.ts file in your src folder

Step 3 : Import your compiled .ts file and apply to component(s)
```javascript
import { animations } from "./prefx"
import { Component } from "@angular/core"

@Component({
  selector: 'app',
  template: '<div *ngIf="a==1" [@fadeInUp]="true">hello world</div>',
  animations: animations
})
```


# Work on This Project
Everything in this topic is run in an command prompt terminal

Clone this project
```bash
git clone https://github.com/AckerApple/ack-angular-fx
```

Dev Fast Project Watching
```bash
npm run watch
```

Build before commit
```bash
npm run build
```


# Credits

A special thank you goes out to [yuyang041060120](https://github.com/yuyang041060120/) for creating [ng2-animate](https://github.com/yuyang041060120/ng2-animate) and for taking too long to respond to my [pull request](https://github.com/yuyang041060120/ng2-animate/pull/4), which has led to the birth of ack-angular-fx.

[Table of Contents](#table-of-contents)

# Resources
- Inspired by [Animate.css](https://daneden.github.io/animate.css)
- [tester @ matthewlein.com](https://matthewlein.com/ceaser/)
- [maps @ easings.net](http://easings.net/)

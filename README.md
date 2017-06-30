# Description

Angular2 animations made easier, inspired by [Animate.css](https://daneden.github.io/animate.css).

[Example Page](https://ackerapple.github.io/ack-angular-fx)

### Table of Contents
- [Install](#install)
  - [Requirements](#requirements)
  - [Include in Project](#include-in-project)
- [Browser Compatibility](#browser-compatibility)
- [Examples](#examples)
  - [Global Usage](#global-usage)
  - [Component Usage](#component-usage)
  - [whileStyle Example](#whilestyle-example)
- [Params](#params)
  - [duration](#duration)
  - [delay](#delay)
  - [easing](#easing)
  - [stagger](#stagger)
  - [name](#name)
  - [igniter](#igniter)
  - [whileStyle](#whilestyle)
- [Customize Defaults](#customize-defaults)
- [AoT Support](#aot-support)
  - [Example Enable All Animations](#example-enable-all-animations)
  - [Example Enable Limited Animations](#example-enable-limited-animations)
  - [PreFx Example](#prefx-example)
  - [Dynamic AoT Support](#dynamic-aot-support)
- [API](#api)
  - [animateFactory](#animatefactory)
  - [animateConfig](#animateconfig)
  - [animateDefaults](#animatedefaults)
- [Built-in Animations Attributes](#built-in-animations-attributes)
- [Supported Animations](#supported-animations)
- [web-animations-js](#web-animations-js)
- [Work on This Project](#work-on-this-project)
  - [Building Example](#building-example)
- [Credits](#credits)

# Install

## Requirements
Since you're using Angular, the following are expected to already be installed:

- reflect-metadata
- @angular/core

Two ways to install:

- Use ack-webpack to install jsDependencies
- Manually install jsDependencies

### Use ack-webpack to install jsDependencies

> NOTE : ack-webpack auto adds a script entry to your package.json file to make CLI commands easier

Step 1
```bash
npm install ack-webpack --save-dev
```

Step 2
```bash
npm run ack-webpack -- install ack-angular-fx
```
> The above command will utilize a jsDependencies key of your package.json file. It also installs sub-jsDependencies of dependent packages

### Manually Install jsDependencies
INSTEAD, of the two step process seen above, run the following

```bash
npm install ack-angular-fx web-animations-js @angular/animations --save-dev
```

## Include in Project
```javascript
import * as ackFx from 'ack-angular-fx';
```
# Browser Compatibility
Out of the box, ack-angular-fx is only fully compatibile with a hand-full of browsers

To enable full support, add just about any animation polyfill. An animation polyfill is available within ack-anagular, read the next example below...

## Built-in Polyfill Example
An animation polyfill is already available to you in ack-angular-fx

```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app/app.module';
import { supportDocument } from 'ack-angular-fx/web-animations.min';

supportDocument(document)

platformBrowserDynamic().bootstrapModule(AppModule);
```

# Examples

[Example Page](https://ackerapple.github.io/ack-angular-fx)

## Global Usage
Make life simple, if you just want to use the default animation definitions provided by ack-angular-fx

> NOTE: not seen as to be compatible with AoT compiling. See [Aot Support](#aot-support)

app.js
```javascript
import * as ackFx from 'ack-angular-fx';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app',
  template: require('./app.html'),
}) export class AppComponent {}

const declarations = [ AppComponent, SomeOtherComponent ]

//heads-up, not seen as to be compatible with AoT compiling
ackFx.upgradeComponents(declarations)

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: declarations,
  bootstrap: [AppComponent]
}) export class AppModule {}
```
> You can now use animation attributes such as [@200]="'slideInLeft'" in all your components

app.html
```html
<p [@100]="'fadeInUp'" *ngIf="show">fadeInUp 100</p>
<p [@200]="'fadeInUp'" *ngIf="show">fadeInUp 200</p>
<p [@300]="'fadeInUp'" *ngIf="show">fadeInUp 300</p>
<p [@400]="'fadeInUp'" *ngIf="show">fadeInUp 400</p>
<p [@500]="'fadeInUp'" *ngIf="show">fadeInUp 500</p>
<p [@600]="'fadeInUp'" *ngIf="show">fadeInUp 600</p>
<p [@700]="'fadeInUp'" *ngIf="show">fadeInUp 700</p>
<p [@800]="'fadeInUp'" *ngIf="show">fadeInUp 800</p>
<p [@900]="'fadeInUp'" *ngIf="show">fadeInUp 900</p>
<p [@1000]="'fadeInUp'" *ngIf="show">fadeInUp 1000</p>
<p [@1500]="'fadeInUp'" *ngIf="show">fadeInUp 1500</p>
<p [@2000]="'fadeInUp'" *ngIf="show">fadeInUp 2000</p>

<button (click)="show = !show">toggle</button>
```


## Component Usage
Animation configuration definitions. Elements will be animated as they enter and as they exit

> NOTE: When using AoT compiling, the following example, will typically import a fxArray from a prefx file and that array will be your component's only animation defintion

app.js
```javascript
import { animateConfig, animateFactory } from 'ack-angular-fx'

@Component({
  selector: 'app',
  template: require('./app.html'),
  animations: [
    animateFactory(1000, 200, 'ease-in'),
    animateConfig({duration:200, delay:0, easing:'linear', name:'animateFast'})
  ]
}) export class AppComponent{
  show: boolean = true
  list: string[] = ['xxx', 'yyy']
  onAdd() {
    this.list.push('zzz')
  }
  onRemove(i) {
    this.list.splice(i, 1)
  }
}
```

app.html
```html
<p [@animate]="'fadeIn'" *ngIf="show">fadeIn</p>
<p [@animateFast]="'fadeIn'" *ngIf="show">fadeIn fast</p>
<button (click)="show = !show">toggle</button>

<button (click)="onAdd()">add</button>
<ul>
  <li *ngFor="let item of list;let i = index;" [@animate]="'fadeInLeft'">
    {{item}}
    <button (click)="onRemove(i)">X</button>
  </li>
</ul>
```

## Replace With [hidden]

```html
<p [@animate]="state">Hello World</p>
<button (click)="state='fadeOutDown'">hide</button>
```

## whileStyle Example
Lets *always* animate block elements with an absolute position

> This example also demonstrates the `igniter` option

app.js
```javascript
import { animateFactory } from 'ack-angular-fx';

@Component({
  selector: 'app',
  template: require('./main.html'),
  animations: [
    animateConfig({
      duration:200, delay:0, easing:'linear',
      whileStyle:{
        width:'100%',
        position:'absolute'
      }
    }),
    animateConfig({igniter:'void', name:'animateNgFor'})
  ]
})
export class AppComponent{
  view: boolean = 'main';
  list: string[] = ['xxx', 'yyy', 'zzz'];
  onAdd() {
      this.list.push('aaa');
  }
  onRemove(i) {
      this.list.splice(i, 1);
  }
}
```

main.html
```html
<a (click)="view='main'">main</a>
<a (click)="view='about'">about</a>
<a (click)="view='contact'">contact</a>
<hr />
<div style="position:relative;">
  <div *ngIf="view=='main'" [@animate]="'fadeInLeft'">
    <h2>Main View</h2>
    ....
  </div>
  <div *ngIf="view=='about'" [@animate]="'fadeInLeft'">
    <h2>About View</h2>
    ....
  </div>
  <div *ngIf="view=='contact'" [@animate]="'fadeInLeft'">
    <h2>Contact View</h2>
    <p>----- List below only animates on button actions and NOT on view=='contact' -----</p>
    <ul>
      <li *ngFor="let item of list;let i = index;" [@animateNgFor]="'fadeInLeft'">
        {{item}}
        <button (click)="onRemove(i)">X</button>
      </li>
    </ul>
    <p>Without the igniter option, the ngFor would animate even during view=='contact' stage transition</p>
  </div>
</div>
```

# Params
The configuration options available to define

### duration
the duration of the animation

- type: string | number
- optional, default value is `500ms`

### delay
the delay of the animation

- type: string | number
- optional, default value is `0`

### easing
the easing function of the animation

- type: string
- optional, default value is `linear`
- easing cheat sheet
  - linear
  - ease
  - ease-in
  - ease-out
  - ease-in-out
  - [tester @ matthewlein.com](https://matthewlein.com/ceaser/)
  - [maps @ easings.net](http://easings.net/)

### effects
Array list of effects to have in an animation definition

- fade
- slide
- bounce
- zoom
- rotate

### stagger
Offset multiple animations using Angular 4.2.4 or greater

#### Stagger Items Example
A parent container staggering child animations whenever "fixedStaggers" variable changes value
```html
<div [@childStag]="fixedStaggers">
  <div (click)="fixedStaggers=!fixedStaggers" *ngFor="let x of [1,2,3,4,5,6,7,8]">
    <div class="childFx" *ngIf="!fixedStaggers" [@500]="'fadeInLeft'">
      ngFor loop with *ngIf animations for each
    </div>
  </div>
</div>
```

#### Stagger Table Rows Example
A table element staggering row animations whenever "rowStaggers" variable changes value
```html
<table style="width:100%" [@childStag]="rowStaggers">
  <ng-container *ngFor="let x of [1,2,3,4,5,6,7,8]">
    <tr class="childFx" (click)="rowStaggers=!rowStaggers" *ngIf="!rowStaggers" [@500]="panelAnimType+\'Left\'" style="background-color:#CCC">
      <td>{{ x }}</td>
      <td>Item Col {{ x }}</td>
    </tr>
  </ng-container>
</table>
```

### name
the animation trigger/state name registered with Angular

- type: string
- optional, default value is `animate`


### igniter
The state selector that triggers animation

- type: string
- optional, default value is `*` which means any state change triggers animation

> TIP: igniter option is most often used as `void`, which makes animation only trigger when something like `*ngIf` brings an element out of a void state

### whileStyle
A style definition that will be applied during defined animation process

- type: object
- optional

# Customize Defaults

```javascript
import { animateDefaults } from 'ack-angular-fx';

animateDefaults.duration = 500
animateDefaults.delay    = 0
animateDefaults.easing   = 'linear'
animateDefaults.name     = 'animate'
animateDefaults.igniter  = '*'
animateDefaults.whileStyle.position = 'absolute'
```

# AoT Support
Ahead of Time Support when JiT is too slow

Currently, only compiling an animation ts file into your project is supported. Luckily, ack-angular-fx comes with a command line compiler. This limitation appears to be an @angular/compiler-cli issue as I cannot get dynamic animations to work, for AoT, for the life of me.

### Example Enable All Animations

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

Step 3 : Import your compiled .ts file and apply to component(s)
```javascript
import { fxArray } from "./prefx"
import { Component } from "@angular/core"

@Component({
  selector: 'app',
  template: '<div [@500]="'fadeInUp'" *ngIf="a==1">hello world</div>',
  animations: fxArray
})
```

### Example Enable Limited Animations
Reduce file size by selecting a limited number of animation-definitions and effects

Add the following to your package.json scripts
```javascript
"scripts":{
  "compile:prefx": "ack-angular-fx --select animateSwap,400,500 --effects fade,slide --igniter void --out ./src/prefx.ts"
}
````

Now, run the following in a command prompt terminal
```bash
npm run compile:prefx
```

### PreFx Example
Code below allows usage of [@100] through [@2500] and all of the absoluteSwap animations

The following works AFTER you have built a prefx file
```javascript
import { fxArray } from "./prefx"
import { Component } from "@angular/core"

@Component({
  selector: 'app',
  template: '<div [@500]="'fadeInUp'" *ngIf="a==1">hello world</div>',
  animations: fxArray
}) export class AppComponent{
  public a = 0
  constructor(){
    setInterval(()=>this.a=this.a==0?1:0, 1000)
  }
}
```

### Dynamic AoT Support
In the future, we hope to have a more dynamic natured way of building animations on the fly

We have tried:

- Adhereing to AoT compiling recommendations
  - Functions only return logical operations
  - Just about everything is exposed via export
  - Removed all ${} for ''+'' string concats
- Using @ngtools/webpack
  - Can't get past errors
- **Ended up offering cli animation bundler known as the prefx file**


# API
What resources are available for consuming

> Using AoT compiling? Then please note:
>> None of the following API functionality, is supported during AoT compiling

## animateFactory
Input is an array of arguments that returns an Angular2 animation stack

```javascript
import { animateFactory } from 'ack-angular-fx';
animateFactory(duration: string|number, delay: string|number, easing: string, name: string)
```

> See [Params](#params) for more information about arguments

## animateConfig
Input is an object of attributes that returns an Angular2 animation stack

```javascript
import { animateConfig } from 'ack-angular-fx';
animateConfig(config: object)
```

> See [Params](#params) for more information about attributes

## animateDefaults
Established and change animation defaults

```javascript
import { animateDefaults } from 'ack-angular-fx';
```

> See [Params](#params) for more information about defaults


# Built-in Animation Attributes

- [@100]="'slideInLeft'"
- [@200]="'slideInLeft'"
- [@300]="'slideInLeft'"
- [@400]="'slideInLeft'"
- [@500]="'slideInLeft'"
- [@600]="'slideInLeft'"
- [@700]="'slideInLeft'"
- [@800]="'slideInLeft'"
- [@900]="'slideInLeft'"
- [@1000]="'slideInLeft'"
- [@1500]="'slideInLeft'"
- [@2000]="'slideInLeft'"
- [@absoluteSwap]="'slideInLeft'"

# Supported Animations

- fadeIn
  - fadeInDown
  - fadeInLeft
  - fadeInRight
  - fadeInUp
- bounceIn
  - bounceInDown
  - bounceInLeft
  - bounceInRight
  - bounceInUp
- rotateIn
  - rotateInDownLeft
  - rotateInDownRight
  - rotateInUpLeft
  - rotateInUpRight
- slideInDown
- slideInLeft
- slideInRight
- slideInUp
- zoomIn
  - zoomInDown
  - zoomInLeft
  - zoomInRight
  - zoomInUp

see online demo https://ackerapple.github.io/ack-angular-fx

# web-animations-js

[web-animations-js](https://www.npmjs.com/package/web-animations-js) has been included to make life easier in terms of browser compatibility



# Work on This Project
Everything in this topic is run in an command prompt terminal

Clone this project
```bash
git clone https://github.com/AckerApple/ack-angular-fx
```

## Building Example

Dev Fast Project Watching
```bash
npm run watch:example:jit
```

Dev AoT Project Watching. Longer compile times, ensures production compatibility
```bash
npm run watch:example
```

When changing core animations, the example prefx must be compiled
```bash
npm run compile:example:prefx
```

## Publishing

```bash
npm run build
```


# Credits

A special thank you goes out to [yuyang041060120](https://github.com/yuyang041060120/) for creating [ng2-animate](https://github.com/yuyang041060120/ng2-animate) and for taking too long to respond to my [pull request](https://github.com/yuyang041060120/ng2-animate/pull/4), which has led to the birth of ack-angular-fx.

[Table of Contents](#table-of-contents)

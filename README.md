# Description

Angular2 animations made easier, inspired by [Animate.css](https://daneden.github.io/animate.css).

[Example Page](https://ackerapple.github.io/ack-angular-fx)

### Table of Contents
- [Install](#install)
  - [Requirements](#requirements)
  - [Include in Project](#include-in-project)
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
- [API](#api)
  - [animateFactory](#animatefactory)
  - [animateConfig](#animateconfig)
  - [animateDefaults](#animatedefaults)
- [Built-in Animations Attributes](#built-in-animations-attributes)
- [Supported Animations](#supported-animations)
- [web-animations-js](#web-animations-js)
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
```
npm install ack-webpack --save-dev
```

Step 2
```
npm run ack-webpack -- install
```

### Manually Install jsDependencies

```bash
npm install ack-angular-fx web-animations-js --save-dev
```

## Include in Project
```
import * as ackFx from 'ack-angular-fx';
```

# Examples

[Example Page](https://ackerapple.github.io/ack-angular-fx)

It is highly recommended you visit the example code for best overall view:

- [app.module.ts](https://github.com/AckerApple/ack-angular-fx/blob/master/example/src/app/app.module.ts)
- [app.html](https://github.com/AckerApple/ack-angular-fx/blob/master/example/src/app/app.html)

## Global Usage
Make life simple, if you just want to use the default animation definitions provided by ack-angular-fx

app.js
```
import * as ackFx from 'ack-angular-fx';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app',
  template: require('./app.html'),
}) export class AppComponent {}

const declarations = [ AppComponent, SomeOtherComponent ]

ackFx.upgradeComponents(declarations)

@NgModule({
  imports: [],
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
Items will have animation as they come in and when they leave

app.js
```javascript
import { animateConfig, animateFactory } from 'ack-angular-fx';

@Component({
  selector: 'app',
  template: require('./app.html'),
  animations: [
    animateFactory(1000, 200, 'ease-in'),
    animateConfig({duration:200, delay:0, easing:'linear', name:'animateFast'})
  ]
})
export class AppComponent{
    show: boolean = true;
    list: string[] = ['xxx', 'yyy'];
    onAdd() {
        this.list.push('zzz');
    }
    onRemove(i) {
        this.list.splice(i, 1);
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
<button (click)="state = 'fadeOutDown'">hide</button>
```

## whileStyle Example
Lets always animate block elements with an absolute position

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

### stagger
NOT YET SUPPORTED. Placeholder for future release of Angular2 with stagger support

- type: number
- optional, default value is 0

Angular2 stagger animation support tracking : [tap here](https://github.com/angular/angular/issues/7478)

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

```
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

### PreFx
Currently, only the following import is supported for AoT compiling

```
import fxArray from "ack-angular-fx/prefx"
````

### PreFx Example
Code below allows usage of [@100] through [@2500] and all of the 

```
import fxArray from "ack-angular-fx/prefx"
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


# API
What resources are available for consuming

> Using AoT compiling?
>> None of the following API functionality is supported during AoT compiling

## animateFactory
Input is an array of arguments that returns an Angular2 animation stack

```
import { animateFactory } from 'ack-angular-fx';
animateFactory(duration: string|number, delay: string|number, easing: string, stagger: number, name: string)
```

> See [Params](#params) for more information about arguments

## animateConfig
Input is an object of attributes that returns an Angular2 animation stack

```
import { animateConfig } from 'ack-angular-fx';
animateConfig(config: object)
```

> See [Params](#params) for more information about attributes

## animateDefaults
Established and change animation defaults

```
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

# Credits

A special thank you goes out to [yuyang041060120](https://github.com/yuyang041060120/) for creating [ng2-animate](https://github.com/yuyang041060120/ng2-animate) and for taking too long to respond to my [pull request](https://github.com/yuyang041060120/ng2-animate/pull/4), which has led to the birth of ack-angular-fx.

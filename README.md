# Description

Angular animations made easy. [Example Page](https://ackerapple.github.io/ack-angular-fx)

[![hire me](https://ackerapple.github.io/resume/assets/images/hire-me-badge.svg)](https://ackerapple.github.io/resume/)
[![npm version](https://badge.fury.io/js/ack-angular-fx.svg)](http://badge.fury.io/js/ack-angular-fx)
[![npm downloads](https://img.shields.io/npm/dm/ack-angular-fx.svg)](https://npmjs.org/ack-angular-fx)
[![Dependency Status](https://david-dm.org/ackerapple/ack-angular-fx.svg)](https://david-dm.org/ackerapple/ack-angular-fx)

![animated gif](https://ackerapple.github.io/ack-angular-fx/fireworks.gif "gumball fireworks")

> Angular 5.2.0+ required

<details>
  <summary>Table of Contents</summary>

- [Install](#install)
  - [Requirements](#requirements)
- [Include](#include)
- [Browser Compatibility](#browser-compatibility)
- [Examples](#examples)
  - [Global Usage](#global-usage)
  - [whileStyle Example](#whilestyle-example)
- [Stagger](#stagger)
- [Params](#params)
  - [duration](#duration)
  - [delay](#delay)
  - [easing](#easing)
  - [name](#name)
  - [igniter](#igniter)
  - [whileStyle](#whilestyle)
- [Customize Defaults](#customize-defaults)
- [AoT Support](#aot-support)
  - [Example Compile All Animations to One File](#example-compile-all-animations-to-one-file)
  - [Example Compile Limited Animations](#example-compile-limited-animations)
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
- [Resources](#resources)

</details>

# Install

## Requirements
Since you're using Angular, the following are expected to already be installed:

- reflect-metadata
- @angular/core
- @angular/animations

```bash
npm install ack-angular-fx --save-dev
```

# Include
Animations must be injected into your components and this is how to do that

```typescript
import { getAllFx } from "ack-angular-fx";
import { Component } from "@angular/core"

@Component({
  animations:getAllFx(),
  template:`
    <div *ngIf="boolean" [@fadeInUp]="boolean">
      ...
    </div>
    <button (click)="boolean=!boolean">
      hide or show
    </button>
  `
}) export class AppComponent
```

## Robust Example Include Fx
This example has pretty much everything needed to boot

```typescript
import "zone.js"
import "reflect-metadata"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { NgModule, Component } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

//ack-angular-fx related imports
import { AckFxModule, getAllFx } from "ack-angular-fx";
import { supportDocument } from "ack-angular-fx/web-animations.min"

supportDocument( document )//cross browser fx support

@Component({
  animations:getAllFx(),
  template:`
    <div *ngIf="boolean" [@rotateIn]="boolean">
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
    AckFxModule//Needed only for swap animations
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
}) export class AppModule {}


platformBrowserDynamic().bootstrapModule(AppModule)
```

# Browser Compatibility
Out of the box, ack-angular-fx is compatibile with most browsers

To enable full support, add just about any animation polyfill.

## Built-in Polyfill Example
An animation polyfill is already available to you in ack-angular-fx

```javascript
import { supportDocument } from "ack-angular-fx/web-animations.min";

supportDocument(document)
```

> `ack-angular-fx/web-animations.min` was built using npm based version of [web-animations-js](https://www.npmjs.com/package/web-animations-js)

# Examples

[Example Page](https://ackerapple.github.io/ack-angular-fx)

## Global Usage
Make life simple, if you just want to use the default animation definitions provided by ack-angular-fx

```javascript
import * as ackFx from 'ack-angular-fx';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const template = `
<p
  *ngIf       = "show"
  [@fadeInUp] = "{value:show, {params:{time:'100ms'}}}"
>
  fadeInUp 100ms
</p>
<button (click)="show = !show">toggle all above</button>
`

//component with NO animation attribute
@Component({
  selector: 'app',
  template: template
}) export class AppComponent {}

const declarations = [ AppComponent, SomeOtherComponent ]

//add or push ack-angular-fx triggers onto all components
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
> You can now use animation attributes such as [@fadeInUp]="value" in all your components

### Stagger
Offset multiple animations using Angular 4.2.4 or greater

Currently, staggering animations using ack-angular-fx, is controlled by a parent stagger definition and child animations subscribing to that via the css class "childFx"

#### Stagger Items Example
A parent container staggering child animations whenever the array adds or removes elements
```html
<div [@childStag]="array.length">
  <div
    *ngFor      = "let x of array"
    [@rotateIn] = "'fadeInLeft'"
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
    <tr [@bounceIn]="array.length" style="background-color:#CCC">
      <td>{{ x }}</td>
      <td>Item Row {{ x }}</td>
    </tr>
  </ng-container>
</table>
```

# Params
The configuration options available to define for animations

## Params Example
```html
<div [@zoomIn]="{value:boolean, params:{time:'2000ms 0 linear'}}">
  ...
</div>
```

Learn more about [Angular animation timing here](https://angular.io/guide/animations#animation-timing)


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
If due to browser lack of support for animations, try including the following in your project

[web-animations-js](https://www.npmjs.com/package/web-animations-js) has been included to make life easier in terms of browser compatibility

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

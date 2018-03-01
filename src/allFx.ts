import { group, query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from "@angular/animations"

export function inFromVoid(from, to) {
    return to && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}

export function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}

export function childIn(from, to) {
    return to ? true : false;
}

export function childOut(from, to) {
    return !to ? true : false;
}

export const fxArray = [

  trigger("childStag50", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(50, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag100", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(100, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(200, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag200", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(200, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag300", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(300, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag400", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(400, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag500", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(500, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag600", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(600, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag700", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(700, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag800", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(800, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag900", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(900, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag1000", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(1000, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag1500", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(1500, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag2000", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(2000, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("absoluteInOut", [
  transition("* <=> *", [
      animate("{{ time }}", 
      keyframes([
        style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
        style({"offset":1,"position":"{{ position }}","width":"100%","overflow":"hidden"})]))],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("absoluteKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1,"position":"{{ position }}","width":"100%","overflow":"hidden"})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1,"position":"{{ position }}","width":"100%","overflow":"hidden"})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("absoluteInKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1,"position":"{{ position }}","width":"100%","overflow":"hidden"})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("absoluteOutKids", [
  transition("* <=> *", [
    group([
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1,"position":"{{ position }}","width":"100%","overflow":"hidden"})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("fadeIn", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInUp", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInDown", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"offset":0}),
            style({"opacity":1,"offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"offset":0}),
            style({"opacity":0,"offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInUpKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInDownKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeInRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
            style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceIn", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInUp", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInDown", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
            style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
            style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
            style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
            style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
            style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
            style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
            style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInUpKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
            style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
            style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
            style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
            style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
            style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
            style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
            style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
            style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInDownKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
            style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
            style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
            style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
            style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
            style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
            style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
            style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
            style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
            style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
            style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
            style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
            style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
            style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
            style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("bounceInRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
            style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
            style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
            style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
            style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
            style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
            style({"transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
            style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateIn", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInUpLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInUpRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInDownLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInDownRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInUpLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInUpRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInDownLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateInDownRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
            style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInUp", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInDown", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInUpKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInDownKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideInRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
            style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomIn", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInUp", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInDown", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInLeft", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInRight", [
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInKids", [
  transition("* <=> *", [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
            style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInUpKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInDownKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInLeftKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomInRightKids", [
  transition(childIn, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(childOut, [
    group([
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
            style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
            style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
            style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
            style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear"
  }
})])]
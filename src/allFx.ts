import { group, query, stagger, animateChild, trigger,style,transition,animate,keyframes } from "@angular/animations"

export function childOut(from, to) {
    return !to ? true : false;
}

export function childIn(from, to) {
    return to ? true : false;
}

export function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}

export function inFromVoid(from, to) {
    return to !== null && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}

export const animations = [

  trigger("zoomInOutRightKids", [
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
}),
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
})]),

  trigger("zoomInOutLeftKids", [
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
}),
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
})]),

  trigger("zoomInOutDownKids", [
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
}),
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
})]),

  trigger("zoomInOutUpKids", [
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
}),
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
})]),

  trigger("zoomInOutKids", [
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

  trigger("zoomInOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomOutRight", [
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
})]),

  trigger("zoomInOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomOutLeft", [
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
})]),

  trigger("zoomInOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomOutDown", [
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
})]),

  trigger("zoomInOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomOutUp", [
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
})]),

  trigger("zoomInOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("zoomOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))],{
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
})]),

  trigger("slideInOutRightKids", [
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
}),
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
})]),

  trigger("slideInOutLeftKids", [
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
}),
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
})]),

  trigger("slideInOutDownKids", [
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
}),
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
})]),

  trigger("slideInOutUpKids", [
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
}),
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
})]),

  trigger("slideInOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
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
})]),

  trigger("slideInOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))],{
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
})]),

  trigger("slideInOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))],{
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
})]),

  trigger("slideInOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("slideOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))],{
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
})]),

  trigger("rotateInOutDownRightKids", [
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
}),
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
})]),

  trigger("rotateInOutDownLeftKids", [
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
}),
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
})]),

  trigger("rotateInOutUpRightKids", [
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
}),
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
})]),

  trigger("rotateInOutUpLeftKids", [
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
}),
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
})]),

  trigger("rotateInOutKids", [
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

  trigger("rotateInOutDownRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateOutDownRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
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
})]),

  trigger("rotateInOutDownLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateOutDownLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
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
})]),

  trigger("rotateInOutUpRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateOutUpRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))],{
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
})]),

  trigger("rotateInOutUpLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateOutUpLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))],{
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
})]),

  trigger("rotateInOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("rotateOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":1})]))],{
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
})]),

  trigger("bounceInOutRightKids", [
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
}),
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
})]),

  trigger("bounceInOutLeftKids", [
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
}),
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
})]),

  trigger("bounceInOutDownKids", [
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
}),
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
})]),

  trigger("bounceInOutUpKids", [
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
}),
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
})]),

  trigger("bounceInOutKids", [
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

  trigger("bounceInOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
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
})]),

  trigger("bounceOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))],{
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
})]),

  trigger("bounceInOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
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
})]),

  trigger("bounceOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))],{
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
})]),

  trigger("bounceInOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
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
})]),

  trigger("bounceOutDown", [
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
})]),

  trigger("bounceInOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
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
})]),

  trigger("bounceOutUp", [
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
})]),

  trigger("bounceInOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
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
})]),

  trigger("bounceOut", [
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
})]),

  trigger("fadeInOutRightKids", [
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
}),
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
})]),

  trigger("fadeInOutLeftKids", [
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
}),
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
})]),

  trigger("fadeInOutDownKids", [
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
}),
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
})]),

  trigger("fadeInOutUpKids", [
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
}),
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
})]),

  trigger("fadeInOutKids", [
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

  trigger("fadeInOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeOutRight", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))],{
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
})]),

  trigger("fadeInOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeOutLeft", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))],{
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
})]),

  trigger("fadeInOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeOutDown", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))],{
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
})]),

  trigger("fadeInOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeOutUp", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))],{
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
})]),

  trigger("fadeInOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
}),
  transition(inFromVoid, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
  }
})]),

  trigger("fadeOut", [
  transition(voidFromIn, [
      animate("{{ time }}", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear"
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
})]),

  trigger("absoluteOutKids", [
  transition("* <=> *", [
    group([
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1})]))], {
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
            style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("absoluteKids", [
  transition("* <=> *", [
    group([
      query(":animating", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1})]))], {
  "optional": true
}),
      query(":leave", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1})]))], {
  "optional": true
}),
      query(":enter", [
          animate("{{ time }}", 
          keyframes([
            style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
            style({"offset":1})]))], {
  "optional": true
})])],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("absoluteInOut", [
  transition("* <=> *", [
      animate("{{ time }}", 
      keyframes([
        style({"offset":0,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
        style({"offset":0.999,"position":"{{ position }}","width":"100%","overflow":"hidden"}),
        style({"offset":1})]))],{
  "params": {
    "time": "200ms 0ms linear",
    "position": "absolute"
  }
})]),

  trigger("childStag2000", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(2000, [
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

  trigger("childStag1000", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(1000, [
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

  trigger("childStag800", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(800, [
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

  trigger("childStag600", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(600, [
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

  trigger("childStag400", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(400, [
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

  trigger("childStag200", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(200, [
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

  trigger("childStag100", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(100, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])]),

  trigger("childStag50", [
  transition("* => *", [
    query(":enter, :leave", [
      stagger(50, [
        animateChild()])], {
  "optional": true,
  "limit": 300
})])])]
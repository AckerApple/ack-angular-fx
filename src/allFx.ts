import { group, query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from "@angular/animations"

export const childOut = function childOut(from, to) {
    return !to ? true : false;
}

export const childIn = function childIn(from, to) {
    return to ? true : false;
}

export const voidFromIn = function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}

export const inFromVoid = function inFromVoid(from, to) {
    return to && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
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

  trigger("2000", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("2000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("1500", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("1500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("1000", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("1000ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("900", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("900ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("800", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("800ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("700", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("700ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("600", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("600ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("500", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("400", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("400ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("300", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("300ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("200", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("200ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("100", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => zoomInUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => zoomInLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => zoomInDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1})]))]),
  transition("void => zoomIn", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("slideInUp => void", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => slideInUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("slideInRight => void", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => slideInRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("slideInLeft => void", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => slideInLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("void => slideOutDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("slideInDown => void", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => slideInDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInUpRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInUpLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1})]))]),
  transition("void => rotateInDownRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1})]))]),
  transition("void => rotateInDownLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1})]))]),
  transition("void => rotateIn", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1})]))]),
  transition("void => bounceInUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1})]))]),
  transition("void => bounceInLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1})]))]),
  transition("void => bounceInDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9}),
        style({"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1})]))]),
  transition("void => bounceIn", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1})]))]),
  transition("void => fadeInUp", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1})]))]),
  transition("void => fadeInLeft", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1})]))]),
  transition("void => fadeInDown", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0}),
        style({"opacity":0,"offset":1})]))]),
  transition("void => fadeIn", [
      animate("100ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0}),
        style({"opacity":1,"offset":1})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("absoluteSwap", [
  transition("zoomInUp => void, void => zoomOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => zoomInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, -60px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("zoomInRight => void, void => zoomOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => zoomInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("zoomInLeft => void, void => zoomOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(-10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => zoomInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(10px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("zoomInDown => void, void => zoomOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, 1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => zoomInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1) translate3d(0, -1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(.475, .475, .475) translate3d(0, 60px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1, 1, 1) translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("zoomIn => void, void => zoomOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => zoomIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.1, .1, .1)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  state("zoomOutUp", 
    style({"display":"none"})),
  state("zoomOutRight", 
    style({"display":"none"})),
  state("zoomOutLeft", 
    style({"display":"none"})),
  state("zoomOutDown", 
    style({"display":"none"})),
  state("zoomOut", 
    style({"display":"none"})),
  transition("void => slideOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("slideInUp => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("slideInRight => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("slideInLeft => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"hidden","transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(-100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("slideInDown => void", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"hidden","transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => slideInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"visibility":"hidden","transform":"translate3d(0, -100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"visibility":"visible","transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  state("slideOutUp", 
    style({"display":"none"})),
  state("slideOutRight", 
    style({"display":"none"})),
  state("slideOutLeft", 
    style({"display":"none"})),
  state("slideOutDown", 
    style({"display":"none"})),
  transition("rotateInUpRight => void, void => rotateOutUpRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => rotateInUpRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => rotateInUpLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("rotateInDownRight => void, void => rotateOutDownRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => rotateInDownRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transformOrigin":"right bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 45deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => rotateInDownLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, -45deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transformOrigin":"left bottom","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("rotateIn => void, void => rotateOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 200deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => rotateIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, -200deg)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transformOrigin":"center","transform":"rotate3d(0, 0, 1, 0deg)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  state("rotateOutUpRight", 
    style({"display":"none"})),
  state("rotateOutUpLeft", 
    style({"display":"none"})),
  state("rotateOutDownRight", 
    style({"display":"none"})),
  state("rotateOutDownLeft", 
    style({"display":"none"})),
  state("rotateOut", 
    style({"display":"none"})),
  transition("bounceInUp => void, void => bounceOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, -10px, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => bounceInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 10px, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, -5px, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("bounceInRight => void, void => bounceOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => bounceInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(10px, 0, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(-5px, 0, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("bounceInLeft => void, void => bounceOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(-20px, 0, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(1000px, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => bounceInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-1000px, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(20px, 0, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(-10px, 0, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(5px, 0, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("bounceInDown => void, void => bounceOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"translate3d(0, 10px, 0)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, -20px, 0)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(0, 1000px, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => bounceInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -1000px, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 20px, 0)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, -10px, 0)","offset":0.75,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 5px, 0)","offset":0.9,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("bounceIn => void, void => bounceOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"transform":"scale3d(.9, .9, .9)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.5,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => bounceIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"scale3d(.3, .3, .3)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1.1, 1.1, 1.1)","offset":0.2,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.9, .9, .9)","offset":0.4,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(1.03, 1.03, 1.03)","offset":0.6,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"transform":"scale3d(.97, .97, .97)","offset":0.8,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"scale3d(1, 1, 1)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  state("bounceOutUp", 
    style({"display":"none"})),
  state("bounceOutRight", 
    style({"display":"none"})),
  state("bounceOutLeft", 
    style({"display":"none"})),
  state("bounceOutDown", 
    style({"display":"none"})),
  state("bounceOut", 
    style({"display":"none"})),
  transition("fadeInUp => void, void => fadeOutUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => fadeInUp", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("fadeInRight => void, void => fadeOutLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => fadeInRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("fadeInLeft => void, void => fadeOutRight", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(100%, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => fadeInLeft", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(-100%, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("fadeInDown => void, void => fadeOutDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"transform":"translate3d(0, 100%, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => fadeInDown", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"transform":"translate3d(0, -100%, 0)","offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"transform":"translate3d(0, 0, 0)","offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("fadeIn => void, void => fadeOut", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":1,"offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":0,"offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  transition("void => fadeIn", [
      animate("500ms 0ms linear", 
      keyframes([
        style({"opacity":0,"offset":0,"position":"absolute","width":"100%","overflow":"hidden"}),
        style({"opacity":1,"offset":1,"position":"absolute","width":"100%","overflow":"hidden"})]))]),
  state("fadeOutUp", 
    style({"display":"none"})),
  state("fadeOutRight", 
    style({"display":"none"})),
  state("fadeOutLeft", 
    style({"display":"none"})),
  state("fadeOutDown", 
    style({"display":"none"})),
  state("fadeOut", 
    style({"display":"none"}))]),

  trigger("zoomInRightKids", [
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

  trigger("zoomInLeftKids", [
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

  trigger("zoomInDownKids", [
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

  trigger("zoomInUpKids", [
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

  trigger("zoomInRight", [
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

  trigger("zoomInLeft", [
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

  trigger("zoomInDown", [
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

  trigger("zoomInUp", [
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

  trigger("zoomIn", [
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

  trigger("slideInRightKids", [
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

  trigger("slideInLeftKids", [
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

  trigger("slideInDownKids", [
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

  trigger("slideInUpKids", [
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

  trigger("slideInRight", [
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

  trigger("slideInLeft", [
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

  trigger("slideInDown", [
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

  trigger("slideInUp", [
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

  trigger("rotateInDownRightKids", [
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

  trigger("rotateInDownLeftKids", [
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

  trigger("rotateInUpRightKids", [
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

  trigger("rotateInUpLeftKids", [
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

  trigger("rotateInDownRight", [
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

  trigger("rotateInDownLeft", [
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

  trigger("rotateInUpRight", [
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

  trigger("rotateInUpLeft", [
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

  trigger("rotateIn", [
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

  trigger("bounceInRightKids", [
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

  trigger("bounceInLeftKids", [
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

  trigger("bounceInDownKids", [
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

  trigger("bounceInUpKids", [
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

  trigger("bounceInRight", [
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

  trigger("bounceInLeft", [
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

  trigger("bounceInDown", [
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

  trigger("bounceInUp", [
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

  trigger("bounceIn", [
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

  trigger("fadeInRightKids", [
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

  trigger("fadeInLeftKids", [
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

  trigger("fadeInDownKids", [
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

  trigger("fadeInUpKids", [
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

  trigger("fadeInRight", [
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

  trigger("fadeInLeft", [
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

  trigger("fadeInDown", [
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

  trigger("fadeInUp", [
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

  trigger("fadeIn", [
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
import { Component } from "@angular/core"
import { string as swapping } from "./swapping.template"
import { FxSession } from "./FxSession.injectable"
import { animations } from "../../src/allFx";

@Component({
  template   : swapping,
  animations : animations
}) export class Swapping{
  inFx:boolean
  fxId:any
  hideToggle:boolean
  swapIndex:number = 0
  fxTime:string = "1000ms 0ms linear"
  swapArray = [1,2,3,4,5,6,7,8]
  fxPosition:string = "absolute"
  positions:string[] = ["static","relative","absolute","fixed"]

  constructor(public FxSession:FxSession){}
}

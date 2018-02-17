import { EventEmitter, Output, Input, Directive } from "@angular/core"

@Directive({
  selector:"fx-tracker"
}) export class FxTracker{
  @Input() value:any
  history:any[] = []
  histPos:number = 0

  @Input() fxId:0|false|1|true
  @Output() fxIdChange:EventEmitter<0|false|1|true> = new EventEmitter()

  ngOnChanges(changes){
    if(changes.value){
      this.produceFxId(changes.value.currentValue)
    }
  }

  produceFxId( value:any ){
    const histLen = this.history.length
    const isBack = histLen && this.history[this.histPos-1]==value
    const isForward = histLen && this.history[this.histPos+1]==value

console.log('history', isBack , this.histPos, this.history, value)

    //back
    if( isBack ){
      --this.histPos
      this.fxId = this.fxId === 0 ? false : 0
      this.fxIdChange.emit(this.fxId)
      return this.fxId
    }

    this.fxId = this.fxId === 1 ? true : 1
    this.fxIdChange.emit(this.fxId)

    if( isForward ){
      ++this.histPos
      return this.fxId
    }

    this.history.push( value )
    this.histPos = this.history.length - 1

    this.history.splice(25, this.history.length)//ensure history no greater than 25. If not this command does nothing

    return this.fxId
  }
}
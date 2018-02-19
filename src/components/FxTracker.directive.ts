import { EventEmitter, Output, Input, Directive } from "@angular/core"

@Directive({
  selector:"fx-tracker"
}) export class FxTracker{
  @Input() value:any
  
  @Input() history:any[]
  @Output() historyChange:EventEmitter<any[]> = new EventEmitter()
  
  @Input() index:number
  @Output() indexChange:EventEmitter<number> = new EventEmitter()

  @Input() fxId:0|false|1|true
  @Output() fxIdChange:EventEmitter<0|false|1|true> = new EventEmitter()

  ngOnChanges(changes){
    if(changes.value){
      this.produceFxId(changes.value.currentValue)
    }
  }

  produceFxId( value:any ){
    this.history = this.history || []
    this.index = this.index==null ? 0 : this.index

    const histLen = this.history.length
    const isBack = histLen && this.history[this.index-1]==value
    const isForward = histLen && this.history[this.index+1]==value

    //back
    if( isBack ){
      this.indexChange.emit( --this.index )
      this.fxId = this.fxId === 0 ? false : 0
      this.fxIdChange.emit(this.fxId)
      return this.fxId
    }

    this.fxId = this.fxId === 1 ? true : 1
    this.fxIdChange.emit(this.fxId)

    if( isForward ){
      this.indexChange.emit( ++this.index )
      return this.fxId
    }

    this.history.push( value )

    this.index = this.history.length - 1
    this.indexChange.emit( this.index )

    this.history.splice(25, this.history.length)//ensure history no greater than 25. If not this command does nothing

    return this.fxId
  }
}
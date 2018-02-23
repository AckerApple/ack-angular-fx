import { EventEmitter, Output, Input, Directive } from "@angular/core"

@Directive({
  selector:"fx-tracker",
  exportAs:"fxTracker"
}) export class FxTracker{
  @Input() value:any
  @Input() activatedRoute:any//ActivatedRoute
  @Input() orderArray:any[]//back and foward determined by matching items in array

  @Input() history:any[]
  @Output() historyChange:EventEmitter<any[]> = new EventEmitter()
  
  @Input() index:number
  @Output() indexChange:EventEmitter<number> = new EventEmitter()

  @Input() fxId:0|false|1|true
  @Output() fxIdChange:EventEmitter<0|false|1|true> = new EventEmitter()

  ngOnChanges(changes){
    if( changes.value ){
      this.produceFxId(changes.value.currentValue)
    }

    if( changes.activatedRoute && changes.activatedRoute.currentValue ){
      this.produceByRoute(changes.activatedRoute.currentValue)
    }
  }

  produceByRoute( activatedRoute:any ){
    const path = this.getRoutePath(activatedRoute)
    this.produceFxId( path )
  }

  produceFxId( value:any ):0|false|1|true{
    this.history = this.history || []

    if( this.orderArray ){
      this.fxId = this.produceOrderFxId(value)
      this.fxIdChange.emit(this.fxId)
    }else{
      this.index = this.index==null ? 0 : this.index

      const histLen = this.history.length
      const isBack = histLen && this.history[this.index-1]==value
      const isForward = histLen && this.history[this.index+1]==value

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
      
      this.index = this.history.length//push will occur
    }

    this.history.push( value )
    this.indexChange.emit( this.index )
    this.history.splice(25, this.history.length)//ensure history no greater than 25. If not this command does nothing
    this.historyChange.emit( this.history )
    return this.fxId
  }

  produceOrderFxId( value:any ):0|false|1|true{
    let oldIndex:number = 0
    let newIndex:number = 0
    const oldValue = this.history[this.history.length-1]

    this.orderArray.forEach((item,index)=>{
      if(value===item){
        newIndex = index
      }

      if(oldValue===item){
        oldIndex = index
      }
    })

    this.index = newIndex

    if( newIndex > oldIndex ){
      return this.fxId = this.fxId === 0 ? false : 0
    }

    return this.fxId = this.fxId === 1 ? true : 1
  }

  getRoutePath( activatedRoute ):any{
    let target = activatedRoute
    while(target.firstChild)target=target.firstChild
    return target.routeConfig.path
  }
}
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FxTracker } from './components/FxTracker.directive'

@NgModule({
  imports:[
    CommonModule,
  ],
  declarations: [ FxTracker ],
  exports : [ FxTracker ]
}) export class AckFxModule {}
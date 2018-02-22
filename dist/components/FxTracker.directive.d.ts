import { EventEmitter } from "@angular/core";
export declare class FxTracker {
    value: any;
    orderArray: any[];
    history: any[];
    historyChange: EventEmitter<any[]>;
    index: number;
    indexChange: EventEmitter<number>;
    fxId: 0 | false | 1 | true;
    fxIdChange: EventEmitter<0 | false | 1 | true>;
    ngOnChanges(changes: any): void;
    produceFxId(value: any): 0 | false | 1 | true;
    produceOrderFxId(value: any): 0 | false | 1 | true;
}

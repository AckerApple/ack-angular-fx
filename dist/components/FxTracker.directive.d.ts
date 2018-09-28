import { EventEmitter } from "@angular/core";
export declare class FxTracker {
    value: any;
    activatedRoute: any;
    orderArray: any[];
    history: any[];
    historyChange: EventEmitter<any[]>;
    index: number;
    indexChange: EventEmitter<number>;
    id: 0 | false | 1 | true;
    loaded: boolean;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    produceByRoute(activatedRoute: any): void;
    produceFxId(value: any): 0 | false | 1 | true;
    produceOrderFxId(value: any): 0 | false | 1 | true;
    getRoutePath(activatedRoute: any): string;
}

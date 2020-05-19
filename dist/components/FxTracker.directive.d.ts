import { EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
export declare class FxTracker {
    value: any;
    activatedRoute: ActivatedRoute;
    orderArray: (string | boolean | number)[];
    history: any[];
    historyChange: EventEmitter<any[]>;
    index: number;
    indexChange: EventEmitter<number>;
    id: 0 | false | 1 | true;
    loaded: boolean;
    inFx: boolean;
    orderIndex: number;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    produceByRoute(activatedRoute: any): void;
    produceFxId(value: any): 0 | false | 1 | true;
    produceOrderFxId(value: any): 0 | false | 1 | true;
    getRoutePath(activatedRoute: any): string;
    delayOutFx(): void;
}

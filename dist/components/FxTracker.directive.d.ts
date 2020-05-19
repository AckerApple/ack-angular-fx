import { EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<FxTracker, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FxTracker, "fx-tracker", never, { "value": "value"; "activatedRoute": "activatedRoute"; "orderArray": "orderArray"; "history": "history"; "index": "index"; "id": "id"; }, { "historyChange": "historyChange"; "indexChange": "indexChange"; }, never>;
}

import { EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as i0 from "@angular/core";
export declare class FxTracker {
    router: Router;
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
    constructor(router: Router);
    ngAfterViewInit(): void;
    produceByRoute(activatedRoute: any): void;
    produceFxId(value: any): 0 | false | 1 | true;
    produceOrderFxId(value: any): 0 | false | 1 | true;
    getRoutePath(activatedRoute: any): string;
    delayOutFx(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FxTracker, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FxTracker, "fx-tracker", ["FxTracker"], { "value": "value"; "activatedRoute": "activatedRoute"; "orderArray": "orderArray"; "history": "history"; "index": "index"; "id": "id"; }, { "historyChange": "historyChange"; "indexChange": "indexChange"; }, never, never, false>;
}

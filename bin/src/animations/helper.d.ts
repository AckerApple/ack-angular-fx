import { AnimationStyleMetadata, AnimationTransitionMetadata, AnimationGroupMetadata } from '@angular/animations';
import { fxConfig } from '../fxTypes';
export declare function stylize(styleDef: any, options: any): AnimationStyleMetadata;
export declare function defaultOptions(options?: {}): {
    igniter: string;
};
export interface fxConfigCombo {
    timing: string;
    options: fxConfig;
}
export declare function combo(timing: any, options: fxConfig): fxConfigCombo;
export declare function childInOutTransition(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[]): AnimationTransitionMetadata[];
export declare function inOutGroupQueryByStyles(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[]): AnimationGroupMetadata;
export declare function inFromVoid(from: any, to: any): boolean;
export declare function voidFromIn(from: any, to: any): boolean;
export declare function inOutTransitions(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[]): AnimationTransitionMetadata[];
export declare function childIn(from: any, to: any): boolean;
export declare function childOut(from: any, to: any): boolean;
export declare function childInOutTransitions(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[], backInStyles: AnimationStyleMetadata[], backOutStyles: AnimationStyleMetadata[]): AnimationTransitionMetadata[];

import { AnimationStyleMetadata, AnimationTransitionMetadata, AnimationGroupMetadata } from '@angular/animations';
import { fxConfig } from '../index';
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
export declare function inOutTransitions(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[]): AnimationTransitionMetadata[];
export declare function childInOutTransitions(inStyles: AnimationStyleMetadata[], outStyles: AnimationStyleMetadata[], backInStyles: AnimationStyleMetadata[], backOutStyles: AnimationStyleMetadata[]): AnimationTransitionMetadata[];

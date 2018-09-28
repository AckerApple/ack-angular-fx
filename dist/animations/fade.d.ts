import { AnimationTransitionMetadata, AnimationTriggerMetadata, AnimationStateMetadata } from '@angular/animations';
import { fxConfig } from "../types";
export declare const triggers: AnimationTriggerMetadata[];
export declare function states(config: fxConfig): (AnimationStateMetadata | AnimationTransitionMetadata)[];

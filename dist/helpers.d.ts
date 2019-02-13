export { animations } from "./allFxDynamic";
import { selectedFxMetaData, fxConfig, effectsTypeObject } from "./fxTypes";
import { AnimationTriggerMetadata, AnimationStateMetadata, AnimationTransitionMetadata } from '@angular/animations';
export declare const availEffects: string[];
export declare const delayArray: number[];
export declare const animateDefaults: {
    stagger: number;
    name: string;
    igniter: string;
    whileStyle: {};
    effects: string[];
};
export declare const absSwap: {
    easing: string;
    name: string;
    igniter: string;
    whileStyle: {
        position: string;
        width: string;
        'overflow': string;
    };
};
export declare const menu: {
    absoluteSwap: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap100: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap200: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap300: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap400: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap500: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap600: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap700: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap800: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap900: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap1000: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap1500: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap2000: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    absoluteSwap2500: {
        easing: string;
        name: string;
        igniter: string;
        whileStyle: {
            position: string;
            width: string;
            'overflow': string;
        };
        duration: number;
    };
    "100": {
        duration: number;
    };
    "200": {
        duration: number;
    };
    "300": {
        duration: number;
    };
    "400": {
        duration: number;
    };
    "500": {
        duration: number;
    };
    "600": {
        duration: number;
    };
    "700": {
        duration: number;
    };
    "800": {
        duration: number;
    };
    "900": {
        duration: number;
    };
    "1000": {
        duration: number;
    };
    "1500": {
        duration: number;
    };
    "2000": {
        duration: number;
    };
};
export declare function getConfigTiming(config: fxConfig): string;
export declare function defaultConfig(config: any): any;
export declare function animateConfig(name: string, config: fxConfig): AnimationTriggerMetadata;
export declare function createTriggerBy(name: string, config: fxConfig, timing: string): AnimationTriggerMetadata;
export declare function effectsArrayToTypes(eArray: string[]): effectsTypeObject;
export declare function stateEffectsByConfig(timing: string, config: fxConfig): (AnimationStateMetadata | AnimationTransitionMetadata)[];
export declare function selectFx(args: string[], effectList: string[], config?: fxConfig): selectedFxMetaData;
export declare function processSelect(name: string, config: fxConfig, effectArray?: string[]): AnimationTriggerMetadata;
export declare function getAnimations(): AnimationTriggerMetadata[];
export declare let absSwapClone: {
    name: any;
    duration: any;
    whileStyle: any;
};

export { AckFxModule } from "./AckFx.module";
import { AnimationTriggerMetadata, AnimationStateMetadata, AnimationTransitionMetadata } from '@angular/animations';
export interface selectedFxMetaData {
    triggers: AnimationTriggerMetadata[];
    states: AnimationTriggerMetadata[];
}
export interface whileStyle {
    position: string;
    width: string;
    overflow: string;
}
export interface fxConfig {
    name?: string;
    stagger?: number;
    igniter?: '*' | string;
    duration?: number;
    effects?: string[];
    delay?: number;
    easing?: 'linear' | string;
    whileStyle?: whileStyle;
}
export interface effectsTypeObject {
    fade?: boolean;
    bounce?: boolean;
    rotate?: boolean;
    slide?: boolean;
    zoom?: boolean;
}
export declare const availEffects: string[];
export declare const delayArray: number[];
export declare const animateDefaults: {
    stagger: number;
    name: string;
    igniter: string;
    whileStyle: {};
    effects: string[];
};
export declare const absSwap: fxConfig;
export declare const menu: {
    absoluteSwap: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap100: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap200: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap300: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap400: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap500: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap600: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap700: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap800: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap900: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap1000: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap2000: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
    };
    absoluteSwap2500: {
        name?: string;
        stagger?: number;
        igniter?: string;
        duration: number;
        effects?: string[];
        delay?: number;
        easing?: string;
        whileStyle?: whileStyle;
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
export declare function animateFactory(duration: number, delay: number, easing: string, stagger: number, name: string): AnimationTriggerMetadata;
export declare function defaultConfig(config: any): any;
export declare function animateConfig(name: string, config: fxConfig): AnimationTriggerMetadata;
export declare function getConfigTiming(config: fxConfig): string;
export declare function createTriggerBy(name: string, config: fxConfig, timing: string): AnimationTriggerMetadata;
export declare function effectsArrayToTypes(eArray: string[]): effectsTypeObject;
export declare function stateEffectsByConfig(timing: string, config: fxConfig): (AnimationStateMetadata | AnimationTransitionMetadata)[];
export declare function upgradeComponent(component: any, animations?: any): void;
export declare function selectFx(args: string[], effectList: string[], config?: fxConfig): selectedFxMetaData;
export declare function processSelect(name: string, config: fxConfig, effectArray?: string[]): AnimationTriggerMetadata;
export declare function getFxArray(): AnimationTriggerMetadata[];
export declare let absSwapClone: {
    name: any;
    duration: any;
    whileStyle: any;
};
export declare function upgradeComponents(array: any, animations?: any): void;

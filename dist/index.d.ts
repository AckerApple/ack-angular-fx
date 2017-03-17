import 'reflect-metadata';
import { AnimationEntryMetadata } from '@angular/core';
export declare const effects: Array<string>;
export declare const delayArray: Array<number>;
export declare const menu: {
    absoluteSwap: {
        duration: number;
    };
    absoluteSwap100: {
        duration: number;
    };
    absoluteSwap200: {
        duration: number;
    };
    absoluteSwap300: {
        duration: number;
    };
    absoluteSwap400: {
        duration: number;
    };
    absoluteSwap500: {
        duration: number;
    };
    absoluteSwap600: {
        duration: number;
    };
    absoluteSwap700: {
        duration: number;
    };
    absoluteSwap800: {
        duration: number;
    };
    absoluteSwap900: {
        duration: number;
    };
    absoluteSwap1000: {
        duration: number;
    };
    absoluteSwap2000: {
        duration: number;
    };
    absoluteSwap2500: {
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
export declare const animateDefaults: {
    duration: number;
    delay: number;
    easing: string;
    stagger: number;
    name: string;
    igniter: string;
    whileStyle: {};
    effects: string[];
};
export declare function animateFactory(duration: string | number, delay: string | number, easing: string, stagger: number, name: string): AnimationEntryMetadata;
export declare function defaultConfig(config: any): any;
export declare function checkStagger(config: any): any;
export declare function animateConfig(name: any, config: any): AnimationEntryMetadata;
export declare function animateFixedConfig(name: any, config: any): AnimationEntryMetadata;
export declare function getConfigTiming(config: any): string;
export declare function createTriggerBy(name: any, config: any, timing: any): AnimationEntryMetadata;
export declare function pushEffectsByConfig(array: any, timing: any, config: any): any;
export declare function upgradeComponent(component: any, animations?: any): void;
export declare function selectFx(args: any, effectList: any): any[];
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
export declare function getFxArray(): AnimationEntryMetadata[];
export declare let absSwapClone: {
    name: any;
    duration: any;
    whileStyle: any;
};
export declare function processSelect(name: any, config: any, effectArray?: Array<string>): AnimationEntryMetadata;
export declare function upgradeComponents(array: any, animations?: any): void;

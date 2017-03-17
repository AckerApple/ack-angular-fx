import 'reflect-metadata';
import { AnimationEntryMetadata } from '@angular/core';
export declare const animateDefaults: {
    duration: number;
    delay: number;
    easing: string;
    stagger: number;
    name: string;
    igniter: string;
    whileStyle: {};
};
export declare function animateFactory(duration: string | number, delay: string | number, easing: string, stagger: number, name: string): AnimationEntryMetadata;
export declare function defaultConfig(config: any): any;
export declare function checkStagger(config: any): any;
export declare function animateConfig(name: any, config: any): AnimationEntryMetadata;
export declare function animateFixedConfig(name: any, config: any): AnimationEntryMetadata;
export declare function getConfigTiming(config: any): string;
export declare function createTriggerBy(name: any, config: any, timing: any): AnimationEntryMetadata;
export declare function upgradeComponent(component: any, animations?: any): void;
export declare function selectFx(...args: any[]): AnimationEntryMetadata[];
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
export declare const delayArray: number[];
export declare function getFxArray(): AnimationEntryMetadata[];
export declare let absSwapClone: {
    name: any;
    duration: any;
    whileStyle: any;
};
export declare function processEachDelay(n: any): AnimationEntryMetadata[];
export declare function upgradeComponents(array: any, animations?: any): void;

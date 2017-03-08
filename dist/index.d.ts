import 'reflect-metadata';
import "web-animations-js";
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
export declare function animateConfig(config: any): AnimationEntryMetadata;
export declare const delayArray: number[];
export declare function upgradeComponent(component: any, animations?: any): void;
export declare function getFxArray(): any[];
export declare function upgradeComponents(array: any, animations?: any): void;

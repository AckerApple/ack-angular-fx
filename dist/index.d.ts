import { AnimationTriggerMetadata } from '@angular/animations';
export interface fxConfig {
    igniter?: string;
}
export declare const effects: Array<string>;
export declare const delayArray: Array<number>;
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
export declare function animateFactory(duration: string | number, delay: string | number, easing: string, stagger: number, name: string): AnimationTriggerMetadata;
export declare function defaultConfig(config: any): any;
export declare function animateConfig(name: any, config: any): AnimationTriggerMetadata;
export declare function animateFixedConfig(name: any, config: any): AnimationTriggerMetadata;
export declare function getConfigTiming(config: any): string;
export declare function createTriggerBy(name: any, config: any, timing: any): AnimationTriggerMetadata;
export declare function pushEffectsByConfig(array: any, timing: any, config: any): any;
export declare function upgradeComponent(component: any, animations?: any): void;
export declare function selectFx(args: any, effectList: any, config?: {
    igniter: string;
}): any[];
export declare function getFxArray(): AnimationTriggerMetadata[];
export declare let absSwapClone: {
    name: any;
    duration: any;
    whileStyle: any;
};
export declare function processSelect(name: any, config?: fxConfig, effectArray?: Array<string>): AnimationTriggerMetadata;
export declare function upgradeComponents(array: any, animations?: any): void;

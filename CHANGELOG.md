# ack-angular-fx - Change Log
All notable changes to this project will be documented here.

## [3.0.1] - 2019-03-19
- fx-tracker uses Promise.resolve().then(()=>) instead of setTimeout

## [3.0.0] - 2019-02-13
- Added Out
  - fadeOut
- Updated dependencies
- Breaking Changes
  - Removed "Global Usage" injection that came via 
  - all in Kids animations like fadeInKids is renamed to fadeInOutKids
  - In is now InOut
    - fadeIn is now fadeInOut
    - fadeIn only transistions in but not out anymore
  - "fxArray" is renamed to "animations"
    - `import { animations } from "ack-angular-fx"`

## [2.3.0] - 2018-11-16
- Updated Angular

## [2.2.1] - 2018-09-28
- fix file refs

## [2.2.0] - 2018-09-28
- Upgraded to Angular6
- deprecated fxId and fxIdChange
  - use `<fx-tracker #fx="FxTracker"></fx-tracker>`
  - fx.id
- removed web-animations-js

## [2.1.2] - 2018-04-12
- Made all basic animations animate even when false or 0 are based in
  - Condition to check to animate was ignoring false or 0
  - Pass 'nofx' when you dont want animation

## [2.1.1] - 2018-03-03
- Added router-outlet documentation
- Fixed FxTracker value tracking when activeRouter monitoring

## [2.1.0] - 2018-03-01
- improved file size by deprecating Angular4 animations
- Breaking Changes
  - Removed [@100],[@200],[@300],[@400],[@500],...
  - Removed [@absoluteSwap],[@absoluteSwap100],[@absoluteSwap200],...

## [2.0.11] - 2018-03-01
- allFx file is now a prefx file and apart of the ack-angular-fx process

## [2.0.9] - 2018-03-01
- all animation transition functions are exported

## [2.0.8] - 2018-02-28
- Updated README file

## [2.0.6] - 2018-02-23
- added transistion function interpolation
  - with options compiled as well
- fix rotate animations

## [2.0.0] - 2018-02-22
- prefx compiling seems no longer required
### Breaking Changes
- upgraded to Angular5. Angular5 is required to use this package
- old stuff should still work but is becoming deprecated

## [1.2.5] - 2017-07-06
### Fixed
- user reported issue
### Changed
- 500 max to 300 for childStag

## [1.2.0] - 2017-06-29
### Breaking Changes
- Angular 4.2.4 is now required
### Added
- query, stagger, animateChild support
- new childStag trigger to support staggering

## [1.1.0] - 2017-03-30
### Fixed
- Made more AoT compatible by making AnimationTriggerMetadata available to prefx outputs

## [1.0.11] - 2017-03-20
### Added
- Better docs

## [1.0.6] - 2017-03-16
### Added
- AoT support by making static prefx animations

## [1.0.5] - 2017-03-09

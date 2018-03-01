# ack-angular-fx - Change Log
All notable changes to this project will be documented here.

## [2.0.10] - 2018-03-01
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

import {
  selectedFxMetaData, fxConfig
} from "./types"

export function getConfigTiming(
  config:fxConfig
):string{
  return [
    (config.duration || 500) +'ms',
    (config.delay || 0) + 'ms',
    (config.easing  || 'linear')
  ].join(' ')
}

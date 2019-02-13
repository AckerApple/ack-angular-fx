import { childStags } from './animations/childStag';
import { triggers as absoluteTriggers } from './animations/absolutes';
import { triggers as fadeTriggers } from './animations/fade';
import { triggers as bounceTriggers } from './animations/bounce';
import { triggers as rotateTriggers } from './animations/rotate';
import { triggers as slideTriggers } from './animations/slide';
import { triggers as zoomTriggers } from './animations/zoom';

export const animations = [
  ...childStags,
  ...absoluteTriggers,
  ...fadeTriggers,
  ...bounceTriggers,
  ...rotateTriggers,
  ...slideTriggers,
  ...zoomTriggers
]
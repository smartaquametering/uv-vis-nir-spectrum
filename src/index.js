import { JSGraph as OriginalJSGraph } from 'common-spectrum';

import { getAnnotations } from './jsgraph/getAnnotations';

export {
  Analysis,
  AnalysesManager,
  toJcamp,
  peakPicking,
  autoPeakPicking,
} from 'common-spectrum';

export { fromJcamp } from './from/fromJcamp';
export { fromSPC } from './from/fromSPC';

export const JSGraph = { ...OriginalJSGraph, getAnnotations };

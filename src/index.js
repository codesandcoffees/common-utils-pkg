// bypass depdency cycle
import expects from './expects/expects';
import doTypesMatch from './doTypesMatch/doTypesMatch';

export default expects(
  doTypesMatch,
  'doTypesMatch',
  {
    0: 'any',
    1: 'string'
  }
);


export { default as arrayToString } from './arrayToString/arrayToString';
export { default as colorBrightness } from './colorBrightness/colorBrightness';
export { default as guid } from './guid/guid';
export { default as invertColor } from './invertColor/invertColor';
export { default as randomPastelColor } from './randomPastelColor/randomPastelColor';
export { default as readableBytes } from './readableBytes/readableBytes';
export { default as slugify } from './slugify/slugify';
export { default as storageClear } from './storageClear/storageClear';
export { default as storageGet } from './storageGet/storageGet';
export { default as storageRemove } from './storageRemove/storageRemove';
export { default as storageSet } from './storageSet/storageSet';
export { default as stringToArray } from './stringToArray/stringToArray';
export { default as toBoolean } from './toBoolean/toBoolean';
export { default as toSentenceCase } from './toSentenceCase/toSentenceCase';
export { default as toTitleCase } from './toTitleCase/toTitleCase';

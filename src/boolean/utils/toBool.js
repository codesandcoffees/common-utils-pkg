const predefinedTrueValues = ['true', 'yes', 'y', '1'];

/**
 * Converts any value to a Boolean equivalent.
 *
 * **Note:** If no user-defined array is passed, the default true values are: ['true', 'yes', 'y', '1'].
 *
 * @module BoolUtil
 * @name toBool
 * @param {*} val value to check if true or false
 * @param {Array} [trueValuesArr] optional array of user defined true values
 * @returns {Boolean} Returns a boolean equivalent of the value.
 * @example
 *
 * BoolUtil.toBool('y');
 *  // => true
 *
 * BoolUtil.toBool(null);
 * // => false
 */
const toBool = (val = null, trueValuesArr = predefinedTrueValues) => {
  let valToTest;
  try {
    valToTest = val.toString().toLowerCase();
  } catch (e) {
    valToTest = val;
  }
  return trueValuesArr.includes(valToTest);
};

export default toBool;

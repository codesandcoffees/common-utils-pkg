/**
 * Splits a string to an array based on the delimiter passed.
 *
 * @module Array
 * @name stringToArray
 * @param {String} string string to convert to array
 * @param {String} delimiter where to split the string
 * @returns {Array} Returns an array of the split string.
 * @example
 *
 * stringToArray('apple;banana;orange', ';');
 * // => ['apple', 'banana', 'orange']
 */
const stringToArray = (string, delimiter) => string.split(delimiter);

export default stringToArray;
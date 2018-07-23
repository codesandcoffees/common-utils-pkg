import argTypesMatch from './argTypesMatch';

const { stack } = new Error();

// currently only checks the first agument
// to do:
// 1. pass an array of expected types
// check if the arguments match the array of expected tyes
// 2. support array of optional parameters types
// 3. support typeof *
// in the end might look something like this
// CoreUtil.takes(func, [...requiredTypes], [...optionalTypes])
const takes = (someFunction, expected) => {
  // eslint-disable-next-line func-names
  const wrappedFunction = function () {
    // eslint-disable-next-line prefer-rest-params
    const arg = [...arguments][0]; // this will only get the 1st parameter
    const argType = typeof arg;
    if (!argTypesMatch(arg, expected)) {
      const caller = stack.split('\n')[2].trim().replace(/Object./g, '');
      // throw an error if the types doesn't match
      throw new Error(`Expected type of '${expected}' but received '${argType}' ${caller}`);
    } else {
      // return the function if the types match
      // eslint-disable-next-line prefer-rest-params
      return someFunction(...arguments);
    }
  };
  return wrappedFunction;
};

export default takes;

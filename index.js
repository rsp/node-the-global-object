'use strict';

const getGlobalObject = () => {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('Cannot find the global object');
};

module.exports = getGlobalObject();

'use strict';

const getGlobalObject = () => {
  if (typeof self !== 'undefined' && self.self === self) {
    return self;
  }
  if (typeof window !== 'undefined' && window.window === self) {
    return window;
  }
  if (typeof global !== 'undefined' && global.global === global) {
    return global;
  }
  throw new Error('Cannot find the global object');
};

module.exports = getGlobalObject();

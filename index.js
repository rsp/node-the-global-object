'use strict';

const getGlobalObject = () => {
  if (typeof self !== 'undefined' && self.self === self &&
    self.Array === Array && self.setInterval === setInterval) {
    return self;
  }
  if (typeof window !== 'undefined' && window.window === window &&
    window.Array === Array && window.setInterval === setInterval) {
    return window;
  }
  if (typeof global !== 'undefined' && global.global === global &&
    global.Array === Array && global.setInterval === setInterval) {
    return global;
  }
  throw new Error('Cannot find the global object');
};

module.exports = getGlobalObject();

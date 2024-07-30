"use strict";
const getAppendBlock = (num, lineMaxNum) => {
  if (num % lineMaxNum) {
    return lineMaxNum - num % lineMaxNum;
  }
  return 0;
};
function debounce(fn, argWait, immediate) {
  if (immediate === void 0) {
    immediate = true;
  }
  var wait = Number(argWait) || 0;
  var timestampProvider = typeof performance === "object" ? performance : Date;
  var timeout;
  var args;
  var context;
  var timestamp;
  var result;
  var later = function() {
    var last = timestampProvider.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = fn.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };
  return function() {
    var restArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      restArgs[_i] = arguments[_i];
    }
    context = this;
    args = restArgs;
    timestamp = timestampProvider.now();
    var callNow = immediate && !timeout;
    if (!timeout)
      timeout = setTimeout(later, wait);
    if (callNow) {
      result = fn.apply(context, args);
      context = null;
      args = null;
    }
    return result;
  };
}
exports.debounce = debounce;
exports.getAppendBlock = getAppendBlock;

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
 export const Debounce = (fn, t) => {
  let delay = t || 500;
  let timer;
  return function() {
      let args = arguments;
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(() => {
          timer = null;
          fn.apply(this, args);
      }, delay);
  }
};

//防抖(立即执行)
export const DebounceRightNow = (fn, t) => {
  var timerId = null;
  var flag = true;
  let delay = t || 500;
  return function() {
      clearTimeout(timerId);
      if (flag) {
          fn.apply(this, arguments);
          flag = false
      }
      timerId = setTimeout(() => { flag = true }, delay)
  }
}

export const DebounceNoReset = (fn, t) => {
  let delay = t || 500;
  let timer;
  return function() {
      let args = arguments;
      if (timer) {
          return
      }
      timer = setTimeout(() => {
          timer = null;
          fn.apply(this, args);
      }, delay);
  }
};
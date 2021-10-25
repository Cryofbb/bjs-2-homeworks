function cachingDecoratorNew(func) {
  let cache = {};
  function wrapper(...args) {
    let hash = args.join(',');
    if (hash in cache) {
      return "Из кэша: " + cache[hash];
    } else {
      cache[hash] = func.apply(this, args);
      if (Object.keys(cache).length > 4) delete cache[Object.keys(cache)[0]];
      return "Вычисляем: " + cache[hash];
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let flag;
  function wrapper (...args) {
    if (flag) return;
    func.apply(this, ...args);
    flag = true;
    setTimeout(() => {flag = false}, ms);
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let flag;
  function wrapper (...args) {
    wrapper.history++;
    if (flag) return;
    func.apply(this, ...args);
    flag = true;
    setTimeout(() => {flag = false}, ms);
  }
  wrapper.history = 0;
  return wrapper;
}

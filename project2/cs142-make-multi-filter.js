function cs142MakeMultiFilter(originalArray) {
  // 初始化 currentArray，使其与 originalArray 相同
  let currentArray = originalArray;

  // 定义返回的过滤函数 arrayFilterer
  function arrayFilterer(filterCriteria, callback) {
    // 如果 filterCriteria 不是函数，直接返回 currentArray
    if (typeof filterCriteria !== 'function') {
      return currentArray;
    }

    // 使用 filterCriteria 对 currentArray 进行过滤
    currentArray = currentArray.filter((element) => filterCriteria(element));

    // 如果 callback 是一个函数，则在过滤后调用它，并将 currentArray 作为参数
    if (typeof callback === 'function') {
      callback.call(originalArray, currentArray);
    }

    // 返回自身，以便链式调用
    return arrayFilterer;
  }

  // 返回 arrayFilterer 函数
  return arrayFilterer;
}

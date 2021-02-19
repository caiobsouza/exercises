module.exports = (array = [], k) => {
  array.sort();

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] === k) {
      return true;
    }

    if (array[left] + array[right] < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return false;
};
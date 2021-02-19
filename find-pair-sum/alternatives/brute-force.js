module.exports = (array = [], k) => {
  return array.some((i, leftIndex) => {
    let hasFound = false;

    array.map((j, rightIndex) => {
      const isSumEqualToK = j + i === k;
      const isSameIndex = leftIndex === rightIndex;

      hasFound = !hasFound && !isSameIndex && isSumEqualToK;
    });

    return hasFound;
  });
};
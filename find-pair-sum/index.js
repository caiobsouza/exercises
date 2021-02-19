module.exports = (array = [], k) => {
  const visited = {};

  for (const value of array) {
    if (visited[k - value])
    { return true;}
    else
    { visited[value] = true; }
  }

  return false;
};
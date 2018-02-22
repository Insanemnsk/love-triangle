/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const length = preferences.length;
  let counter = 0;
  for (let i = 0; i < length; i++) {
    let startingElement = i + 1;
    let current = preferences[i];
    let next = preferences[current - 1];
    if (current !== next && current !== 0 && next !== 0) {
      for (let j = 0; j < 2; j++) {
        current = next;
        next = preferences[current - 1];
      };
      if (startingElement === current) {
        counter++
      };
    };
  };
  return counter / 3 ;
};

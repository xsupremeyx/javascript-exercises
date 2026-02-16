const pascal = function(n) {
  if (n === 1) {
    return [1];
  }

  const prevRow = pascal(n - 1);
  const currentRow = [];

  currentRow.push(1);

  for (let i = 1; i < prevRow.length; i++) {
    currentRow.push(prevRow[i - 1] + prevRow[i]);
  }

  currentRow.push(1);

  return currentRow;
};
  
// Do not edit below this line
module.exports = pascal;

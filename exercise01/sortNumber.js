// Implement sortNumber function
function sortNumber(a, b, c) {
  // Sort the input numbers
  const sortedNumbers = [a, b, c].sort((x, y) => x - y);
  return sortedNumbers;
}

module.exports = sortNumber;

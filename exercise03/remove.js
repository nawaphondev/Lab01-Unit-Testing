function remove(arr, number) {
  // TODO: Implement Code
  const index = arr.indexOf(number);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return index;
}

module.exports = remove;



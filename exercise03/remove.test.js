// 1. Design and Write Tests
// 2. Implement Function
const remove = require("./remove");

// Test cases for the remove function
function testRemove() {
  const arr = [1, 2, 3, 4, 5];

  // Test case 1: Number exists in array
  console.log(remove(arr, 3) === 2);
  console.log(arr);

  // Test case 2: Number does not exist in array
  console.log(remove(arr, 6) === -1);
}

testRemove();

const sortNumber = require("./sortNumber");

// Test cases for sortNumber function
const testCases = [
  { input: [2, 5, 1], expectedOutput: [1, 2, 5] },
  { input: [10, 3, 7], expectedOutput: [3, 7, 10] },
  { input: [100, 50, 75], expectedOutput: [50, 75, 100] },
  { input: [-1, -5, -10], expectedOutput: [-10, -5, -1] },
  { input: [0, 0, 0], expectedOutput: [0, 0, 0] }, // Handling case when all numbers are the same
];

// Function to compare arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// Function to test sortNumber function
function testSortNumber() {
  for (let testCase of testCases) {
    const input = testCase.input;
    const expectedOutput = testCase.expectedOutput;
    const output = sortNumber(...input);

    console.log(
      `Input: [${input}], Expected Output: [${expectedOutput}], Output: [${output}]`
    );

    // Check if the output matches the expected output
    if (arraysEqual(output, expectedOutput)) {
      console.log("Test Passed");
    } else {
      console.log("Test Failed");
    }
  }
}

// Run tests
testSortNumber();

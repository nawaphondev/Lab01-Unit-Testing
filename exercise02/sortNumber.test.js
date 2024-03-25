// 1. Implement Expect Function ✓ ✕
// 2. Implement Test Function
const sortNumber = require("../exercise01/sortNumber");

class TestFramework {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    test(description, testFunction) {
        const startTime = process.hrtime();

        try {
            testFunction();
            this.passed++;
            console.log(`✅ Test Passed: ${description}`);
        } catch (error) {
            this.failed++;
            console.error(`❌ Test Failed: ${description}`);
            console.error(`Error: ${error.message}`);
        }

        const endTime = process.hrtime(startTime);
        const executionTime = (endTime[0] * 1e9 + endTime[1]) / 1e6; // milliseconds
        console.log(`Execution time: ${executionTime.toFixed(2)}ms\n`);
    }

    summary() {
        console.log(`\nSummary:`);
        console.log(`Total tests: ${this.passed + this.failed}`);
        console.log(`Passed: ${this.passed}`);
        console.log(`Failed: ${this.failed}`);
    }
}

// Example usage:
const testFramework = new TestFramework();

testFramework.test("Sorting numbers", () => {
    const result = sortNumber(2, 5, 1);
    const expected = [1, 2, 5];
    if (!arraysEqual(result, expected)) {
        throw new Error(`Expected ${expected}, but got ${result}`);
    }
});

testFramework.summary();

// Function to compare arrays
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


// TODO: List some other testcases here...

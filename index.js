function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();

  for (const num of array) {
    const diff = target - num;
    if (seen.has(diff)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
   Create an empty hash set called "seen".
   For each num in the array:
   Add num to "seen".
  If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
 function uses a hash set to keep track of the numbers it has seen so far while traversing the array.
 calculates the difference between the target and the current number.(each array)
 it adds the current number to the set and continues to the next number in the array.(not present)
  If the loop completes without finding a pair, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5, 5], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([0, 0, 0, 0], 1));
}

module.exports = hasTargetSum;


module.exports = hasTargetSum;

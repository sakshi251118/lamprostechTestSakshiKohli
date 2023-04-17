function singleNumber(nums) {
    // Initialize the result to 0
    let result = 0;
  
    // Iterate over each number in the array
    for (let num of nums) {
      // Use bitwise XOR to flip the bits of the result with the current number
      // This cancels out every number that appears twice, leaving only the single number
      result ^= num;
    }
  
    // Return the final result, which contains the single number that appears only once
    return result;
  }
  
  // Example usage
  const nums = [1];
  const result = singleNumber(nums);
console.log(result); // Output
  
//This solution uses the bitwise XOR operator (^) to find the single number that appears only once. Since every other number in the array appears twice, their XOR will cancel out and leave only the single number.
  
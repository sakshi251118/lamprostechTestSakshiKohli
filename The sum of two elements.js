
 //In this code, we define the twoSum function that takes an array of numbers nums and a target number target as arguments. Inside the function, we use the same implementation as before to find the indices of the two numbers that add up to the target.
function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === complement) {
          return [i, j];
        }
      }
      seen[nums[i]] = i;
    }
    return [];
}
  //After defining the function, we define some example input values for nums and target, and call the twoSum function with these values. We assign the result to a variable called result, and then log the result to the console.
  
  // Example usage
  //You can modify the values of nums and target to test the function with different inputs. The output will be printed to the console.
  const nums = [3,3];
  const target = 6;
  const result = twoSum(nums, target);
console.log(result); // Output
 








  
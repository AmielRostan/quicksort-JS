function quicksort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  const pivot = arr[0];
  let smaller = [];
  let larger = [];
  // Orient the pivot so that...
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      // every number smaller than the pivot is to the left
      smaller.push(arr[i]);
    } else {
      // every number larger (or equal) than the pivot is to the right
      larger.push(arr[i]);
    }
  }

  // Recursively sort the left
  smaller = quicksort(smaller);
  // Recursively sort the right
  larger = quicksort(larger);

  // Return the left, pivot and right in sorted order
  smaller.push(pivot);
  return smaller.concat(larger);
}


module.exports = [quicksort];

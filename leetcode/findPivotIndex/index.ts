function pivotIndex(nums: number[]): number {
  // iterate through whole list and find total
  // assign leftSum, rightSum
  // when index=0 -> rightSum-index[0]
  // if rightSum=leftSum return the index i
  // else leftSum+index[0] && i++ && rightSum - index[i+1]
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i]
  }

  for (let j = 0; j < nums.length; j++) {
    rightSum -= nums[j]
    if (rightSum === leftSum) {
      return j
    }
    else {
      leftSum += nums[j]
    }
  }
  return -1

};
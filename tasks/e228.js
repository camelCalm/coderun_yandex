// 228. Поиск чисел в массиве с определённой суммой

const sum = (nums, k) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === k && i !== j) {
        return true;
      }
    }
  }
  return false;
};

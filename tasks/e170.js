// 170. Объединение отсортированных массивов

const merge = (nums1, m, nums2, n) => {
  nums1.length = m;
  nums2.forEach((el) => nums1.push(el));
  nums1.sort((a, b) => a - b);
};

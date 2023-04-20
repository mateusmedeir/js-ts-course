const nums1 = [1, 2, 3];
const nums2 = [3, 4, 6];

//const nums3 = nums1.concat(nums2, [7, 8, 9], 'Mateus');

// ... rest
const nums3 = [...nums1, ...nums2, ...[7, 8, 9], 'Mateus'];
console.log(nums3);
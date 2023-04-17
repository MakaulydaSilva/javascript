const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const nums3 =  nums1.concat(nums2, [7, 8, 9]);

console.log(nums3);

//... rest -> ... spread

const a = [1, 2, 3, 4, 5, 6];
const nomes = ['Pierre', 'Makauly'];

const b = [...a, 7, 8, 9, ...nomes];

console.log(b);
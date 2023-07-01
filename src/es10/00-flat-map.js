const array = [1,2,[3,4,[1,3,5]],5,6];
const result = array.flat(2);
console.log(array);
console.log(result);

const array2 = [1,2,3,4,1,3,5,5,6];
const result2 = array2.flatMap(v=>[v, v*2]);
console.log(array2);
console.log(result2);
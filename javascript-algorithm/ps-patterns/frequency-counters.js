// 내가 만든 함수: O(nlogn)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const orderInDesc = (a, b) => b - a;
  const newArr1 = arr1.sort(orderInDesc);

  return arr2.sort(orderInDesc).every((x, i) => x === newArr1[i] ** 2);
};

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

// naive: O(n^2)
const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // 루프
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2); // 루프 (indexOf)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

// refactor: O(n)
const same3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);

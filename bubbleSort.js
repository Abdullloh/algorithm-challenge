function bubbleSort(numsArr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < numsArr.length; i++) {
      if (numsArr[i] > numsArr[i + 1]) {
        let temp = numsArr[i + 1];
        numsArr[i + 1] = numsArr[i];
        numsArr[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let nums = [5, 4, 3, 2, 1];
bubbleSort(nums);
console.log(nums);

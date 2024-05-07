/** ---------------- Iterator with and without Generator ----------------- */
let arr = ["Ahmed", "mohamed", "mahmoud", "ali", "mohsen"];

arr[Symbol.iterator] = function getVal() {
  let count = 0;
  return {
    next: () => {
      if (count == arr.length) {
        return {
          value: undefined,
          done: true,
        };
      } else {
        return {
          value: arr[count++],
          done: false,
        };
      }
    },
  };
};

/** -------------- Generator ------------------ */
arr[Symbol.iterator] = getVal;

function* getVal() {
  for (let index = 0; index < arr.length; index++) {
    yield arr[index];
  }
}

for (const i of arr) {
  console.log(i);
}

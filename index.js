let arr = [3, 5, 12, 45, 10, -10, -101, 2, -200, 47, 89];
let possitive = [];
let negative = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    possitive.push(arr[i]);
  } else {
    negative.push(arr[i]);
  }
}
console.log(possitive);
console.log(Array.from(negative));

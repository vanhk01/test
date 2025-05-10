Array.prototype.myMap = function(handle){
  let arr = [];
  let length = this.length;
  for(let i = 0; i < length; i++){
    arr.push(handle(this[i], i, this));
  }
  return arr;
}



let arr = [1, 2, 3, 4];
// let sum = arr.map(x=> x + 2);
let sum = arr.myMap(x => x + 2);
console.log(sum)
// console.log(arr)
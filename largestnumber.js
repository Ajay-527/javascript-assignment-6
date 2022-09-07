let arrlen = parseInt(prompt("enter the array length"));
var arr = [];
for (let i = 0; i < arrlen; i++) {
  arr.push(prompt("enter the number"));
}
let num = arr.sort((a, b) => b - a);
let index = parseInt(prompt("length number value"));
alert([...new Set(num)][index - 1]);

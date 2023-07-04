'use strcit';

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}° in ${i + 1} days`;
  }
  return str;
};
alert('hi');

console.log(printForcast(data1));

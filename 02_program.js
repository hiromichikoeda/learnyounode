let sum = 0;
for (let i = 0; i < process.argv.length-2; i++) {
	sum = sum + Number(process.argv[i + 2]);
}
console.log(sum);











// 模範回答
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
//
// console.log(result)
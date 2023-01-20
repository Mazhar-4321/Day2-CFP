let basicArray = [1, 2, 3, 4, 5]
basicArray = basicArray.concat([6, 7, 8]);
console.log(basicArray)
console.log(basicArray.includes(8) ? basicArray.indexOf(8) : null)
basicArray.push(7)
console.log(basicArray)
basicArray.shift();
console.log(basicArray)
basicArray.unshift(89)
console.log(basicArray)
console.log(basicArray.slice(2,5))
basicArray.splice(3,1)
console.log(basicArray)
console.log(basicArray.fill(99,1,));
let string=basicArray.join(",")
console.log(string)
console.log(basicArray.some((e)=>e%2==1))

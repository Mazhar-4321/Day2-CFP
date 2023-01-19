const array=[1,2,3,4];
const array2=[9,0]
const array3=[...array,...array2]
console.log(array3)
const [a,...c]=array
console.log(a,c)
const obj1={
    brand:'a',
    number:'b'
}
const obj2={
    brand1:'a',
    number1:'b'
}
const obj3={...obj1,...obj2}
const {brand,number}=obj1
console.log(obj3,brand,number)
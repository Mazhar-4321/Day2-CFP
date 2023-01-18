function add(a,b){
    return ["sum=",a+b];
}
function diff(a,b){
    return ["diff=",a-b];
}
function mul(a,b){
    return ["product=",a*b];
}
function print(message,val){
    console.log(message,val)
}
function calculation(a,b,fn){
//console.log(fn(a,b))
let [msg,val]=fn(a,b);
print(msg,val)
}
calculation(1,5,diff)
// example2 callback 
function greet(name, myFunction) {
    console.log('Hello world');

    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
function greet1(){
    console.log('Hello world');
}
setTimeout(greet, 2000, 'John', sayName);
setTimeout(greet1, 2000);
sayName('John');
// example 3
function oddOrEven(number,callback){
    const result=number%2==0?'Even':'Odd';
    callback(number,result)
}
oddOrEven(25,(number,result)=>console.log(number+"is"+result))
// example 4
function printResult(result){
    console.log(result)
}
function generateRandomNumber(callback){
callback(Math.floor(Math.random()*100),printResult)
}
function checkIfNumberIsPrime(number,callback){
    let factors=0;
  for(let i=1;i<=number;i++){
if(number%i==0){
    factors++;
}
  }
  if(factors==0){
callback("prime")
  }else{
    callback("composite")
  }
}
generateRandomNumber(checkIfNumberIsPrime)
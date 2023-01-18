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
setTimeout(greet, 2000, 'John', sayName);
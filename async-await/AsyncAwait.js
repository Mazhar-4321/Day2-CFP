function task1(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },1000)
    })
}
function task2(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },1000)
    })
}
function task3(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },1000)
    })
}
task1("hi1")
.then(response=>{console.log(response);return task2("hi2");})
.then(response=>{console.log(response); return task2("hi3");})
.then(response=>console.log(response))
.catch(err=>console.log(err,"lklk"))
  function task1_Async(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message+"async")
        },1000)
    })
}
function task2_Async(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message+"async")
        },1000)
    })
}
function task3_Async(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message+"async")
        },1000)
    })
}
function task2(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },1000)
    })
}
function task3(message){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(message)
        },1000)
    })
}

async function mainTask(){
    var    response= await task1_Async("h1");
    console.log(response);
    var    response= await task2_Async("h2");
    console.log(response);
    var    response=await task3_Async("h3");
    console.log(response);
}
mainTask()
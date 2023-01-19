// setTimeout(()=>{
//     console.log("hi1")
//     setTimeout(()=>{
//         console.log("hi2")
//         setTimeout(()=>{
//             console.log("hi3")
//             setTimeout(()=>{
//                 console.log("hi4")
//             },1000)
//         },1000)
//     },1000)
// },1000)

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
const DAILY_WAGE = 20
let arrived=true;
const user = [{
    "name": "Ali",
    "id": 1,
    "address": "Hyd"
}, {
    "name": "bnd",
    "id": 2,
    "address": "Hyd"
}, {
    "name": "Ali3",
    "id": 3,
    "address": "Hyd"
}, {
    "name": "bnd4",
    "id": 4,
    "address": "Hyd"
}]
function example1() {
    const promise = new Promise((accept, reject) => {
        const fs = require('fs');
        fs.readFile('/abc.txt', 'utf8', (err, data) => {
            if (err) {
                reject("File Read Unsuccessful");

            } else {
                accept(data);
            }
        });

    })
    promise.then(value => console.log(value)).catch(err => console.log(err))
}

example1()
//example2
function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]);
        }, 1000);
    });
}

function onFulfilled(users) {
    console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);
// example3
const returnDailyWagesOfAnEmployee = attendance => {
    return new Promise((resolve, reject) => {
        attendance == 0 ? resolve(DAILY_WAGE) : reject('Absent')
    })
}
returnDailyWagesOfAnEmployee(Math.floor(Math.random() * 10) % 2).then(result => console.log(result)).catch(err => console.log(err))
// example 4
const getOtp = (otp) => {
    return new Promise((resolve, reject) => {
        otp > 0 ? resolve('otp successful') : reject('otp error')
    })
}
const getUserDetails = (userId) => {
    return new Promise((resolve, reject) => {
        const tempUser = user.filter(obj => obj.id === userId)
        console.log(tempUser.length)
        if (tempUser.length==0) {
            throw new Error('user details cant be fetched')
        } else {
            resolve(tempUser)
        }
    })
}
getOtp(Math.floor(Math.random() * 100)).then(result => { console.log(result); getUserDetails(result) }).then(result => console.log(result)).catch(err => console.log("err", err))
//example 5
const ride=new Promise((resolve,reject)=>{
    if(arrived){
        resolve('driver arrived');
    }else{
        reject('driver cancellled the ride');
    }
})
ride.then(result=>console.log(result)).catch(err=>console.log(err));
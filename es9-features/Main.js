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
getOtp(Math.floor(Math.random() * 100)).then(result => { console.log(result); getUserDetails(result) }).then(result => console.log(result)).catch(err => console.log("err", err)).finally(()=>{
    console.log("finally executed")
})
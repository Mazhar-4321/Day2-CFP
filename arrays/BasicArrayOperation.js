class Person {
    constructor(firstName, lastName, city, state, address, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city
        this.state = state
        this.address = address
        this.zip = zip
        this.phoneNumber = phoneNumber
        this.email = email
    }
}
const iterateBasicArray = (array = []) => {
    //style1
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
    //style 2
    for (let element of array) {
        console.log(element)
    }
    //style 3
    array.forEach((element, index) => {
        console.log(element)
    })
}
const iterate2dArray = (array) => {
    //style1
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
    }
    //style 2
    for (let array1d of array) {
        for (let element of array1d) {
            console.log(element)
        }
    }
    //style 3
    array.forEach((array1d, index) => {
        array1d.forEach((element, i) => {
            console.log(element)
        })
    })
}
const iterateArrayOfObjects = (array = []) => {
    // style1
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].firstName, array[i].lastName, array[i].city, array[i].state, array[i].zip, array[i].phoneNumber, array[i].email, array[i].address)
    }
    //style2
    for (let person of array) {
        console.log(person.firstName, person.lastName, person.city, person.state, person.zip, person.phoneNumber, person.email, person.address)
    }
    array.forEach((person) => {
        console.log(person.firstName, person.lastName, person.city, person.state, person.zip, person.phoneNumber, person.email, person.address)
    })
}
const iterateArrayOfArrayOfObjects=(array=[])=>{
    for(const object of array){
        console.log(object["name"],object["address"]["city"],object["address"]["state"],object["address"]["zip"],object["address"]["country"],
        object["mobileNumbers"])
    }
}
const basicArray = [1, 2, 'mazhar', 5];
//iterateBasicArray(basicArray)
const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//iterate2dArray(array2d)
const arrayOfObjects = [new Person('Mazhar', 'Ali', 'Hyderabad', 'Telangana', 'Golconda', '500008', '8125629427', 'syedmazharali742@gmail.com'),
new Person('Azhar', 'Ali', 'Hyderabad', 'Telangana', 'Golconda', '500008', '9125629427', 'syedmazharali742@gmail.com'),
]
//iterateArrayOfObjects(arrayOfObjects)
const arrayOfArrayOfObjects=[{
    "name":"Mazhar",
    "address":{
        "city": "Hyderabad",
        "state":"Telangana",
        "zip":"500008",
        "country":"India"
    },
    "mobileNumbers":[8125629427,9398240597]
}]
iterateArrayOfArrayOfObjects(arrayOfArrayOfObjects)
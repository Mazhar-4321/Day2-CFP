const array=[1,2,3,4];
const contactsList=[
    {
        "name":"Mazhar",
        "city":"Hyderabad"
    },
    {
        "name":"Azhar",
        "city":"Goa"
    },
    {
        "name":"Nazar",
        "city":"Hyderabad"
    }
]
const getEvenNumbersFromArray=(array=[])=>{
    return array.filter((element)=>element%2==0)
}
const getAllContactsOfACity=(city="Hyderabad")=>{
    return contactsList.filter((contact)=>contact.city===city)
}
const getAllNamesOfContact=()=>{
  return  contactsList.map((contact)=>contact.name)
}
const getSumOfAllIntegersInArray=()=>{
    return array.reduce((val1,val2)=>val1+val2,0)
}
const getLargestElementOfArray=()=>{
    return array.reduce((val1,val2)=>val1-val2>0?val1:val2)
}
console.log(getEvenNumbersFromArray(array))
console.log(getAllContactsOfACity("Hyderabad"))
console.log(getAllNamesOfContact())
console.log(getSumOfAllIntegersInArray())
console.log(getLargestElementOfArray())

const fs=require('fs')
const dataBuffer=fs.readFileSync('name.json')
const dataJSON=dataBuffer.toString();
const user=JSON.parse(dataJSON)

user.name='Hirvita'
user.age=22

const userJSON=JSON.stringify(user)
fs.writeFileSync('name.json',userJSON)

console.log(userJSON)

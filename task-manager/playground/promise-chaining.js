require('../src/db/mongoose')

const User = require('../src/models/user')

//5dd530e0654388fb84d936f5

// User.findByIdAndUpdate('5dd530e0654388fb84d936f5',{age: 22}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 22})
// }).then((result) => {
//    console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const UpdateAgeandCount = async(id,age) => {
   const user = await User.findByIdAndUpdate(id,{ age })
   const count = await User.countDocuments( { age })
   return count
}

UpdateAgeandCount('5dd530e0654388fb84d936f5',23).then((count) =>{
    console.log(count)
}).catch((e) => {
    console.log(e)
})
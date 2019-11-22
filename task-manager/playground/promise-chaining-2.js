require('../src/db/mongoose')

const Task = require('../src/models/task')

//5dd7a3f994354f60e18ddd20

// Task.findByIdAndDelete('5dd7a3f994354f60e18ddd20').then((task) => {
//    console.log(task)
//    return Task.countDocuments({ Completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskandcount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({Completed:false})
    return count
}

deleteTaskandcount('5dd7a43f177c8f89a5de4433').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
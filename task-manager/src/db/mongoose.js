const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify:false
});

// -------------- mongoose create operation started -----------------------------------------------------

// const User = mongoose.model('User',{
//     name:{
//         type: String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim:true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Invalid email address')
//             }
//         }
//     },
//     password:{
//       type: String,
//       required: true,
//       minlength: 7,
//       trim: true,
//       validate(value){
//           if(value.toLowerCase().includes('password')){
//               throw new Error('Password does not contain "password"')
//           }
//       }
//     },
//     age:{
//         type: Number,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name:'Hirvita',
//     email:'Hirvita@Syno.com  ',
//     password:'Hirvita',
//     age:22

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error...!!', error)
// })

// ------------------------------ mongoose create operation ends here ----------------------

// -------------------------------- Task of mongoose to create new task -------------------

// const Task = mongoose.model("Task", {
//   Description: {
//     type: String,
//     required:true,
//     trim: true
//   },
//   Completed: {
//     type: Boolean,
//     default: false
//   }
// });

// const TaskAdd = new Task({
//   Description: '   Learn React JS'
  
// });

// TaskAdd.save()
//   .then(() => {
//     console.log(TaskAdd);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// -------------------------------- Task of mongoose ends here ----------------------------------

//import { resolve } from "url"
//import { rejects } from "assert"

// const doWorkPromise = new Promise((resolve, reject) => 
// {     
//     setTimeout(() =>
//      {        // resolve([7, 4, 1])       
//              reject('Things went wrong!')   
//      }, 2000) 
// }) 
 
// doWorkPromise.then((result) => { 
//         console.log('Success!', result)
//      }).catch((error) => {   
//         console.log('Error!', error)
//  })

const add = (a,b) => {
   return new Promise((resolve,reject) => {
           setTimeout(() => {
              resolve(a + b)
           },2000)
   })
}

// add(1,2).then((sum) => {
//     console.log(sum)

//     add(sum,15).then((sum2) => {
//             console.log(sum2)
//     }).catch((e) => {
//             console.log(e)
//     })
// }).catch((e) => {
//         console.log(e)
// })

//promise chaining

add(2,3).then((sum) => {
        console.log("sum = " +sum)
        return add(sum, 18)
}).then((sum2) => {
        console.log("sum 2 = " +sum2)
}).catch((e) => {
        console.log(e)
})
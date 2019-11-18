// setTimeout( () => {
//     console.log('Two seconds are up')
// },2000)

// const names = ['Hirvita','Raj', 'Tarang']
// const shortNames = names.filter((name) =>{
//     return name.length <=3 
// })

// const geocode = (address,callback) => {
//       setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0 
//         }
//         callback(data)
//       },2000)
      
// }

//  geocode('Mumbai', (data) =>{
//    console.log(data)
//  })





const add = (x,y,outputvalue) => {
  setTimeout(() => {
    outputvalue(x+y)
  },2000)
}

add(10,13,(output_sum) => {
    console.log(output_sum)
})
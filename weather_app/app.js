const request = require('request')
//const geocode = require('./utils/geocode')
//const forecast = require('./utils/forecast')

//  ------------------------    Async basics start --------------------
console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
   }, 2000)

setTimeout(() =>{
    console.log('0 second timer')
},0)

setTimeout(() =>{
    console.log('1 second timer')
},1000)

console.log('Stopping')
//  ------------------------    Async basics ends --------------------

// ------------------------- Making HTTP Request starts ---------------------------


//const url = 'https://api.darksky.net/forecast/fdaf6b3208bb2a70c04ec3226de0978e/37.8267,-122.4233'
//hitaxi key 
const url = 'https://api.darksky.net/forecast/6f02e60e249e5e921d56cbcbc8a4cfaf/37.8267,-122.4233'

// request({ url: url },(error,response) =>{
//     // console.log(response)
//     const data = JSON.parse(response.body)
//     console.log(data.currently)
// })

// ------------------------- Making HTTP Request ends ---------------------------

// ------------------------- Response starts -----------------------

request({ url: url ,json: true },(error,response) =>{
  //console.log(response.body)
  
  //console.log(response.body.currently)
   console.log('It is currently  ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
  
   if(error){
    console.log('Unable to connect to weather services')
   }
   else if(response.body.error){
     console.log('Unable to find Location')
   }
   else{
    console.log(response.body.daily.data[0].summary + ' It is currently  ' + response.body.currently.temperature  + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
   }


 // console.log(response.body.daily.data[0].summary + ' It is currently  ' + response.body.currently.temperature  + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')

})

// ------------------------- Response ends ---------------------------------

//------------------- Geocode starts------------------
// Latitude & longitude of Ahmedabad


const address = process.argv[2]

if(!address){
  console.log('Please provide an address')
}
else{
  geocode(address, (error, {latitude,longitude,location}) => {

    if(error){
      return console.log('Error', error)
    }
     
 
     forecast(latitude, longitude, (error,forecastdata) => {
       if(error){
       return console.log('Error', error)
     }
       console.log(location)
      console.log(forecastdata)
   })
    
 })
}

geocode(address, (error,data) => {

   if(error){
     return console.log('Error', error)
   }
    

    forecast(data.latitude, data.longitude, (error,forecastdata) => {
      if(error){
      return console.log('Error', error)
    }
      console.log(data)
     console.log(forecastdata)
  })
   
})

//------------------- Geocode ends------------------

// forecast(37.8267, -122.4233, (error,data) => {
//   console.log('Error', error)
//   console.log('Data',data)
// })

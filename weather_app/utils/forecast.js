const request = require('request')

const forecast = (latitude,longitude,callback)  => {
        const url = 'https://api.darksky.net/forecast/4fb3c60836f6d20facdd43fe663b4f9d/' + latitude + ' , ' + longitude

        

request({ url ,json: true },(error, {   body }) =>{
      //   console.log(response.body.currently)
      //  console.log('It is currently  ' + response.body.currently + ' degress out. There is a ' + response.body.currently + '% chance of rain.')
      
      //  if(error){
      //   callback('Unable to connect to weather services', undefined)
      //  }
      //  else if(response.body.error){
      //    callback('Unable to find Location', undefined)
      //  }
      //  else{
        callback(undefined ,  ' It is currently  ' + body.currently  + ' degress out. There is a ' + body.currently + ' % chance of rain.')
       //}
})

}

module.exports = forecast
const request = require('request')

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaGlydXJhaiIsImEiOiJjazMxbGM5OGkwYWQxM2RwYjl6Z3h2OGRvIn0.GU6iYHkLWCsaGV39xcpLCA'
  
    request({url , json:true }, (error,{ body }) => {
        if(error){
            callback('Unable to connect to location services!!!!',undefined)
        }else if(body.features.length == 0) {
            callback('Unable to find  location.Try another Search.......',undefined)
        }
        else{
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
 }

 module.exports = geocode
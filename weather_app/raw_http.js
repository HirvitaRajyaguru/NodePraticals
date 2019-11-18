const https = require('https')

const url = 'https://api.darksky.net/forecast/4fb3c60836f6d20facdd43fe663b4f9d/40,-75'

 const request = https.request(url,(response) => {
     let data = ''

    response.on('data', (chunk) => {
         data = data + chunk.toString()
       // console.log(chunk)
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
    
})

request.end()


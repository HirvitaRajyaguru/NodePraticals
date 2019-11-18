console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

//        response.json().then((data) => {
//            console.log(data)
//        })
// })

fetch('http://localhost:5000/weather?address=!').then((response) => {
       response.json().then((data) =>{
           if(data.error){
                console.log(data.error)
           }
           else{
               console.log('Location ' + data.location)
               console.log('Forecast ' + data.forecast)
           }
       })
   
})

const weatherform = document.querySelector('form')

weatherform.addEventListener('submit', () => {
   console.log('testing')
})
console.log('Client side javascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

//        response.json().then((data) => {
//            console.log(data)
//        })
// })

//  

const weatherform = document.querySelector('form')
const search = document.querySelector('input')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    fetch('http://localhost:5000/weather?address=' + location).then((response) => {
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
})
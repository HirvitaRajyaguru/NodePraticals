//import { type } from "os"

// object property shorthand

const name = 'Hirvita'
const Age = '23'

const user = {
    name,
    age:Age,
    location:'Ahmedabad'
}

console.log(user)


//object destructuring

const product = {
    label:'Red notebook',
    price: 5,
    stock:500,
    salePrice: 15
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel , stock} = product
// console.log(productLabel)
// console.log(stock)

const transcation = (type, { label , stock = 0} ={ } ) => {
    console.log(type , label , stock)
}

transcation('order',product)



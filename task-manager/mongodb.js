
const mongodb =  require('mongodb')
const MongoClient = mongodb.MongoClient

const ConnectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'

MongoClient.connect(ConnectionURL, { useNewUrlParser: true }, (error, client) => {
   if(error){
     return console.log('Unable to connected to database')
   }
   const db = client.db(databaseName)

  //  db.collection('users').insertOne({
  //    name: 'Hirvita',
  //    age: 22
  //  },(error, result) => {
  //    if(error){
  //      return console.log('Unable to insert user')
  //    }
  //    console.log( result.ops)

  //  })

  // db.collection('users').insertMany([
  //   {
  //     name:'Hitaxi',
  //     age:21
  //   },{
  //     name:'Bansi',
  //     age:23
  //   }
  // ],(error,result) => {
  //   if(error){
  //     return console.log('Unable to insert Documents')
  //   }
  //   console.log(result.ops)
  // })

  db.collection('tasks').insertMany([
      {
        description:'Node assignements 1',
        completed:true
      },{
        description:'Node assignements 2',
        completed:false
      },{
        description:'Training completed',
        completed:false
      }
    ],(error,result) => {
      if(error){
        return console.log('Unable to insert tasks here')
      }
      console.log(result.ops)
    })
})





 

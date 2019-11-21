// const mongodb =  require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require("mongodb");

const ConnectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// ------------------- object ID --------------------------
// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
//console.log(id.getTimestamp())
// ------------------- object ID ends here --------------------------

MongoClient.connect(
  ConnectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connected to database");
    }
    const db = client.db(databaseName);

    // ------------ insert user one-------------------
     db.collection('users').insertOne({
      _id: id,
      name: 'Pooja',
       age: 22
     },(error, result) => {
       if(error){
         return console.log('Unable to insert user')
       }
       console.log( result.ops)

     })
    //----------------- insert user one ends here

    
    
    // ------------ insert user many ends here-------------------

    ------------------- insertion of multiple tasks -------------------
      db.collection('tasks1').insertMany([
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

    //------------ insertion multiple task ends here------------------------

    //--------------- find one------------------

    db.collection('users').findOne( { _id: new ObjectID("5dd4feb268a9e9023d19750d") },(error, user) => {
      if(error){
        return console.log('unable to fetch data')
      }
      console.log(user)
    })

    // -------------- find one ends here -------------------

    //---------------------- find one-----------------------

    db.collection('users').find(  {age: 22}).toArray((error,users) => {
      console.log(users)
    })

    db.collection('users').find(  {age: 22}).count((error,count) => {
      console.log(count)
    })

    //---------------------- find one ends here -----------------------

    // ------------------------ Find challenge starts ----------------------------------

    db.collection('tasks1').findOne({_id: new ObjectID("5dd4f03cd006d89700e4ddc9")},(error,tasks1) => {
      if(error){
        console.log("Unable to fetch record")
      }
      console.log(tasks1)
    })

    db.collection('tasks1').find({ completed: false}).toArray((error,tasks1) => {
      console.log(tasks1)
    })

    // ------------------------ Find challenge ends here ----------------------------------

    // ------------------ update starts here ---------------------

  // ------ update one starts ----------------------
     db.collection('users').updateOne({
       _id: new ObjectID("5dd3e29bccbb6d84f8c6c310")
     },{
      //  $set:{
      //    name:'Raj'
      //  }
      $inc:{
        age:1
      }
     }).then((result) => {
       console.log(result)
     }).catch((error) => {
       console.log(error)
     })

   // ------ update one ends here ----------------------  

   // ------ update many starts ----------------------
    db.collection('tasks1').updateMany({
      completed:true
    },{
      $set:{
        completed:false
      }

    }).then((result) => {
      console.log(result.modifiedCount)
    }).catch((error) => {
      console.log(error)
    })
    // ------ update many ends ----------------------
    // ----------------------- update ends here ------------------------

    // ---------------------- delete starts -----------------------


    // -------------- delete many starts --------------------
    db.collection('users').deleteMany({
      age:22
    }).then((result)  => {
      console.log(result)
    }).catch((error) => {
       console.log(error)
    })
  // --------------- delete many ends here -------------------------------

  // -------------- delete one starts --------------------
    db.collection("tasks1")
      .deleteOne({
        description: "Node assignements 2"
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
 
      // --------------- delete one ends here -------------------------------

    // ---------------------- delete ends here ----------------------
  }
);

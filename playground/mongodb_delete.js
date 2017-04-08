// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
   db.collection('Users').deleteMany({age:23}).then((result) => {
     console.log(result);
   });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  /*db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58e93073cac86b0f8432f35f")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });*/

  // db.close();
});

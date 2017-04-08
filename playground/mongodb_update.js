// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

/*db.collection("Todos").findOneAndUpdate ({
  _id:new ObjectID("58e898c82fe79ebf1bf0391d")},
{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}).then((result)=>{
console.log(result);
});*/
db.collection("Users").findOneAndUpdate ({
  _id:new ObjectID("58e93073cac86b0f8432f365")},
{
  $set:{
    name:"Aritra"
  },
$inc:{
  age:1
}
},
{
  returnOriginal:false
}).then((result)=>{
console.log(result);
});
});

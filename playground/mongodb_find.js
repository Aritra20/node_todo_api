const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if (err) {
		return console.log("Unable to connect to Mongodb server");
	}
	console.log("Connected to Mongodb server");
	// db.collection("Todos").find({
	// 	_id:new ObjectID("58e922ca2fe79ebf1bf03918")
	// }).toArray().then((docs)=>
	// {
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>
	// {
	// 	console.log("Unable to fetch todos",err)
	// });
	/*db.collection("Todos").find().count().then((count)=>
	{
		console.log("Todos");
		console.log(`todos count: ${count}`);
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>
	{
		console.log("Unable to fetch todos",err)
	});*/
	db.collection("Users").find({age:23}).toArray().then((docs)=>
	{
		console.log("Users");
		console.log(JSON.stringify(docs,undefined,2));
	}),(err)=>
	{
		console.log("Unable to fetch todos",err)
	}
});
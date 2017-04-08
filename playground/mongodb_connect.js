const MongoClient = require("mongodb").MongoClient;
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
	if (err) {
		return console.log("Unable to connect to Mongodb server");
	}
	console.log("connected to mongodb server");
	/*db.collection("Todos").insertOne
	({
		text:"Something to do",
		completed:false
	},
	(err,result)=>{
		if(err)
	{
		return console.log("Unable to insert Todo",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});*/
	db.collection("Users").insertOne
	({
		name:"Aritra",
		age:23,
		location:"5, Nilmony Ghosh Lane Serampore Hooghly"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Pooja",
		age:21,
		location:"Barrackpore"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Ishani",
		age:21,
		location:"Barrackpore"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Aishwariya",
		age:23,
		location:"Bolpur"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Monika",
		age:23,
		location:"Mednipur"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Arpan",
		age:23,
		location:"Shantiniketan"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Jami",
		age:24,
		location:"Shealdah"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});
	db.collection("Users").insertOne
	({
		name:"Harish",
		age:23,
		location:"Chennai"
	},
	(err,result)=>{
	if(err)
	{
		return console.log("Unable to insert User Details",err)
	}
	console.log(JSON.stringify(result.ops,undefined,2));
	});

	db.close();
});
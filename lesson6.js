//mongoimport --db catalog --collection books --file catalog.books.json

//7
db.books.find({ "thumbnailUrl": { $exists: false } })

//8
db.books.find({authors:{$all:["Robi Sen"]}},{title:1,longDescription:1})

//9
db.books.find({authors:{$all:[/a/i]}},{title:1,longDescription:1})

//10
db.books.find({categories:['XML','Internet']})

//11
db.books.find({categories:{$all:['XML','Internet']}})

//12
db.books.countDocuments({authors:{$all:[""]}})

//13
db.books.countDocuments({"authors.2":""})

//14
db.books.countDocuments({_id:{$type:"ObjectId"}})

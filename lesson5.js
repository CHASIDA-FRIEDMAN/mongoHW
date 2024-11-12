//mongoimport --db catalog --collection books --file catalog.books.json

//1
db.books.find({title:{$in:[/c#/i,/java/i,/python/i]}})

//2
db.books.find({isbn:{$nin:[/^19/,"1884777384",/0/]}})

//3
db.books.find({$nor:[{isbn:/^19/},{title:/mongo/i},{pageCount:{$gt:600}}]})

//4
db.books.find({status:'PUBLISH'})

//5
db.books.find({pageCount:{$mod:[10,0]}})

//6
db.books.deletemany({$or:[{categories:{$exits:false}},{categories:{$size:0}}]})




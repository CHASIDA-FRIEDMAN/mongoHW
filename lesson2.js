use booksStore
show dbs
db.createCollection('book')
show collections
db.book.insert({name: "aaa" , short_desc: 'bbbb',img_url:'dddd',book_url:'hhhh',isbn:123,price:25.5,categories:['aaa','ddd','kkk'],website_id:'67053cdcc3c1fa33e4072f8d'})
db.book.insert({name: "jjj" , short_desc: 'bbbb',img_url:'dddd',book_url:'hhhh',isbn:123,price:25.5,categories:['aaa','ddd','kkk'],website_id:'67053cdcc3c1fa33e4072f8e'})
db.book.insert({name: "sss" , short_desc: 'bbbb',img_url:'dddd',book_url:'hhhh',isbn:123,price:25.5,categories:['aaa','ddd','kkk'],website_id:'67053cdcc3c1fa33e4072f8f'})

db.createCollection('websites')
db.websites.insert({kode: 568 , name: 'yyyyy',url:'dsds',books:['jjj','aaa','sss']})
db.websites.insert({kode: 123 , name: 'yyyyy',url:'dsds',books:['jjj','aaa','sss']})
db.websites.insert({kode: 789 , name: 'yyyyy',url:'dsds',books:['jjj','aaa','sss']})
show collections
db.websites.drop()






var dt = require("./myDateTime")
var http = require("http")
var url = require("url")
var fs = require("fs")
var uc = require("upper-case")
var mysql = require("mysql")
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    // res.write(dt.myDateTime())
   
    // // res.write(req.url)
    // var toGetParamsUseUrlModule = url.parse(req.url,true).query;
    // res.write(toGetParamsUseUrlModule.year)
    // fs.readFile("sample_html_file.html",function(err,data){
    //     res.write(data)
    //     res.end()
    // })

    // fs.appendFile("sample_html_file.html","<i>appended file</i>",function(err){
    //     if(err){
    //         throw err
    //     }
    //     fs.readFile("sample_html_file.html",function(err,data){
    //         res.write(data)
    //     })
       
    // })

    // fs.open("sample_html_file2.html",'w',function(err,file){
    //     if(err) throw err
    //     res.write("new file created")
    //     fs.unlink("sample_html_file2.html",function(err){
    //         if(err){
    //             throw err
    //         }
    //         res.write("file about to delete")

    //     })
    // })
    // res.write(uc.upperCase("lower case to upper case"))
//   var con = mysql.createConnection({
//     user:"root",
//     password:"root",
//     host:"localhost",
//     database:"institution"
//   })
//    con.connect(function(err){
//     if(err) [
//         console.log("not")
//     ]

//     console.log("connected")
//     con.query("select * from app",function(err,result){
//         if(err) throw err
//         res.write("hello" + result[0].email)
//     })
//    })
var mongodb = require("mongodb")
mongodb.MongoClient.connect("mongodb://127.0.0.1:27017",function(error,result){
    if(error) throw error 
    var dbo = result.db("mydb")
    // dbo.createCollection("firstMongoCollection",function(err,result){
    //     if(err) throw err
       
    // })
    // dbo.collection("firstMongoCollection").insertMany([{user:"user",password:"password"},{user:"test",password:"pass"}],function(err,res){
    //     if(err) throw err
    //     console.log(res)
    // })

    // dbo.collection("firstMongoCollection").find({}).toArray(function(err,res){
    //     if(err) throw err
    //     console.log(res)
    // })

    // dbo.collection("firstMongoCollection").deleteMany({user:"user"},function(err,res){
    //     if(err) throw err
    //     console.log(res)
    // })
})
console.log("connected")

}).listen(8080)


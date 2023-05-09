var MongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017/";
var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());

app.get("/products",(req,res)=>{
    MongoClient.connect(connectionString).then(clientobj=>{
        var database =clientobj.db("shopper");
        database.collection("product").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})

app.get("/detail/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    MongoClient.connect(connectionString).then(clientobj=>{
        var database = clientobj.db("shopper");
        database.collection("product").find({ProductId:id}).toArray().then(document=>{
            res.send(document);
            res.end();
        }
        )
    })
})

app.post("/addproduct",(req,res)=>{
    MongoClient.connect(connectionString).then(clientobj=>{
        var database=clientobj.db("shopper");
        var product={
            "ProductId":parseInt(req.body.ProductId),
            "Name": req.body.Name,
            "Price": parseFloat(req.body.Price),
            "Stock":(req.body.Stock==="true")?true:false
        };
        database.collection("product").insertOne(product).then(result=>{
            console.log("Data Inserted");
            res.redirect("/products");
            res.end();
        })
    })
})

app.put("/updateproduct",(req,res)=>{
    MongoClient.connect(connectionString).then(clientobj=>{
        var database=clientobj.db("shopper");
        var findquery = {ProductId:parseInt(req.body.ProductId)};
        var updatequery ={$set:{Name:req.body.Name,Price:parseFloat(req.body.Price),Stock:(req.body.Stock==="true")?true:false}};

        database.collection("product").updateOne(findquery,updatequery).then(result=>{
            console.log("Record updated");
            res.redirect("/products");
            res.end();
        })
    })
})

app.delete("/deleteproduct/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    MongoClient.connect(connectionString).then(clientobj=>{
        var database = clientobj.db("shopper");
        database.collection("product").deleteOne({ProductId:id}).then(result=>{
            console.log("record Deleted")
            res.end();
        })
    })
})
app.listen(8080);
console.log("server started")
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campGrounds = [
   {name: "Rocky Fork State Park", image: "https://tse4.mm.bing.net/th?id=OIP.XMLExC26oX6h6Z6JDAgDBQEsDI&pid=15.1&P=0&w=255&h=171"},
   {name: "Caesars Creek State Park", image: "https://tse2.mm.bing.net/th?id=OIP.gxEBtOxdJqBCyz2KPVFGMgHaE8&pid=15.1&P=0&w=259&h=173"},
   {name: "Hocking Hills State Park", image: "https://tse2.mm.bing.net/th?id=OIP.a6EKLb36FY6bDVlmGIu-_gHaFj&pid=15.1&P=0&w=238&h=179"},
   {name: "Rocky Fork State Park", image: "https://tse4.mm.bing.net/th?id=OIP.XMLExC26oX6h6Z6JDAgDBQEsDI&pid=15.1&P=0&w=255&h=171"},
   {name: "Caesars Creek State Park", image: "https://tse2.mm.bing.net/th?id=OIP.gxEBtOxdJqBCyz2KPVFGMgHaE8&pid=15.1&P=0&w=259&h=173"},
   {name: "Hocking Hills State Park", image: "https://tse2.mm.bing.net/th?id=OIP.a6EKLb36FY6bDVlmGIu-_gHaFj&pid=15.1&P=0&w=238&h=179"},
   {name: "Rocky Fork State Park", image: "https://tse4.mm.bing.net/th?id=OIP.XMLExC26oX6h6Z6JDAgDBQEsDI&pid=15.1&P=0&w=255&h=171"},
   {name: "Caesars Creek State Park", image: "https://tse2.mm.bing.net/th?id=OIP.gxEBtOxdJqBCyz2KPVFGMgHaE8&pid=15.1&P=0&w=259&h=173"},
   {name: "Hocking Hills State Park", image: "https://tse2.mm.bing.net/th?id=OIP.a6EKLb36FY6bDVlmGIu-_gHaFj&pid=15.1&P=0&w=238&h=179"},
   {name: "Rocky Fork State Park", image: "https://tse4.mm.bing.net/th?id=OIP.XMLExC26oX6h6Z6JDAgDBQEsDI&pid=15.1&P=0&w=255&h=171"},
   {name: "Caesars Creek State Park", image: "https://tse2.mm.bing.net/th?id=OIP.gxEBtOxdJqBCyz2KPVFGMgHaE8&pid=15.1&P=0&w=259&h=173"},
   {name: "Hocking Hills State Park", image: "https://tse2.mm.bing.net/th?id=OIP.a6EKLb36FY6bDVlmGIu-_gHaFj&pid=15.1&P=0&w=238&h=179"}
   ];

app.get("/", function(req, res){
   res.render("landing.ejs");
});


app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs");
});

app.get("/campGrounds", function(req, res){
   res.render("campgrounds.ejs", {campGrounds: campGrounds});
});

app.post("/campgrounds",function(req, res){
   var campgroundName = req.body.name;
   var campgroundImage = req.body.image;
   var newCampground = {name: campgroundName, image: campgroundImage};
   campGrounds.push(newCampground)
   
   //get data from form & add to array
   res.redirect("/campgrounds");
});

app.get("/help",function(req, res){
   res.send("This will be the help page");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started.");
});
const express = require("express");
const bodyParser = request("body-parser");
const App =express();
// apis for hotel managment 
app.use(bodyParser.urlencoder({extended:false}));
//parse application/json
app.use(bodyParser.json());   

//People>/people
//person/Row > /people/person
//Person/Row?Age .> /people/person/age

let people ={ people :[{name:"vishwajeet"}]}
 
App.get("/people",function(req,res){
     //MongoDB
     res.json(people);
     res.end();
 });

App.post("/people",function(req,res){
     //MongoDB
    if(req.body && req.body.name)
        {
          people.people.push({name :req.body.name})
            //pushing a new object in array people 
        }
     res.json(people);
     res.end();

 });
App.put("/people",function(req,res){
     //MongoDB
    if(req.body && req.body.name)
        {
          people.people.push({name :req.body.name})  
        }
     res.json(people);
     res.end();

 });

App.delete("/people",function(req,res){
     //MongoDB
    if(req.body && req.body.name)
        {
          people.people.push({name :req.body.name})  
        }
     res.json(people);
     res.end();

 });



//for any particular person name and parameter for api
App.get("/people/:name",function(req,res){
     
     res.json({name :req.params.name});
     res.end();
 });


App.get("/people/:age",function(req,res){
     
     res.json({name :req.params.age});
     res.end();
 });

//working on various parameters

App.get("/people/:sex",function(req,res){
     
     res.json({name :req.params.sex});
     res.end();
 });

App.get("/people/:realtionship",function(req,res){
     
     res.json({name :req.params.relationship});
     res.end();
 });

 App.get("/people/:address",function(req,res){
     
     res.json({name :req.params.address});
     res.end();
 });

App.get("/people/:phonenumber",function(req,res){
     
     res.json({name :req.params.phonenumber});
     res.end();
 });  


App.listen(3000);
import express from "express";
let app = express();

app.get("/", function(request, response, next){
    response.sendFile("index.html", {"root": __dirname});
});

app.listen(3000, function(){
    console.log("app is listening on port 3000")
});
const express =require("express");
const path = require("path");
const fs = require("fs");
const app =express();
const port = 80;



app.use('/static', express.static('static')); // for serving a static file...

app.use(express.urlencoded());

app.set('views engine', 'pug'); // set the template egine as a pug...
app.set('views', path.join(__dirname,'views'));     // set the view directory...


app.get('/',(req,res)=>{
    const con ="this is best content in online"
    const params ={'title':'pubg is best game',"content":con}
    res.status(200).render('index.pug',params);
});


app.post('/',(req,res)=>{
    const params = {'message':'your form has been submitted succesful',"content":con}
    res.status(200).render('index.pug',params);
})

app.listen(port, ()=>{
    console.log('This application is suceesfull on port80 ');

});
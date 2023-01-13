const express=require('express')
// for deplyement
const PORT=process.env.PORT||8000; 
const app=express()
const mongoose=require('./config/mongoose')
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));


app.use('/',require('./routes/index.js'))

app.listen(PORT,function(err){
    if(err){
        console.log("error in runing the port server ",err )
    }

    console.log("hey your port is runing .....",PORT)
})
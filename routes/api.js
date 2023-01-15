const express= require('express')

const apiroutes= express()
const xmlcontroller = require("../controllers/xmlcontroller")

apiroutes.get('/test', xmlcontroller.datasave)
   

    module.exports=apiroutes
// inserting collections into dtabase
/*Post1.collection.insertOne(d,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("docs inserted")
    }
})*/
    

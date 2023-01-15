const Post1=require("../models/sch")
const request = require('request')
const xml2js = require('xml2js')

const datasave = async(req,res)=>{


request.get("http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/xml/simple.xml",
(error,response,body)=>{
    console.log(body)
    if(error){
    //    return console.dir(error)
    }
    else{
        var d = body
      //  console.dir(d)
    }
  
    xml2js.parseString(d,async function(err,d){
        var q=JSON.stringify(d)
        q=JSON.parse(q)
       // console.log("hello hwo r")
        var foodlength = q["breakfast_menu"]['food'].length
         for(let i = 0;i<foodlength;i++){
        //    console.log(q["breakfast_menu"]['food'][i].name)
            const deis = new Post1({
                name: q["breakfast_menu"]['food'][i].name[0],
                price: q["breakfast_menu"]['food'][i].price[0],
                description : q["breakfast_menu"]['food'][i].description[0],
                 calories :q["breakfast_menu"]['food'][i].calories[0] 
            })
            await deis.save()

         }           
         res.send("data saved")
})
})

}

module.exports = {datasave}
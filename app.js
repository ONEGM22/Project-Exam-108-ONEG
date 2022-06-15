const express = require ('express'),
app = express()

require('dotenv').config()
app.set ('view engine','ejs')
app.use ('/s', require('./routes/input'))
const PORT = process.env.PORT || 3001
app.listen (PORT, ()=>{
    const url ='http://localhost:${PORT}/'
    console.log ('Listening on $ {url}')
})
 const pressanykey = require('press-any-key');
 const prompt =require('prompt-sync')();

 let altitude = prompt ("enter altitude:")
 while (altitude<0 || altitude>3000)
 {
     altitude = prompt ("enter altitude again pls!");
    
     if (altitude>=0 && altitude<=3000)break;
 }
 let HIS =prompt ("enter HIS:");
 while (HIS<0|| HIS >360){

     HIS = prompt ("enter HIS again pls!:");

     if (HIS >=0 && HIS <=360)break;
 }
 let  ADI =prompt ("enter ADI:");
 while (ADI<-100 || ADI >100){

     ADI =prompt ("enter ADI again pls!");

     if (ADI>=-100 && ADI <= 100)break;
 }
 console.clear();
 console.log ("altitude: "+ altitude+"\n");
 console.log ("HIS;" + HIS + "\n");
 console.log ("HIS;" + ADI + "\n");

 pressanykey("press any key")
 .then(()=>{
 console. log ("press any key");
 });

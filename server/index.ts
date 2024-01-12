//  here is the first thing for the 
// setting up of the db
 import mongoose from "mongoose";
//   this is the creation of the
// mongoose db that is going to be used in this section
 const config =  useRuntimeConfig()
  //  here is the value of the db url
   const mongoDB_url_need = "mongodb://127.0.0.1:27017/Church"
  //  here is the new url we are making use of

   console.log(mongoDB_url_need);
export default async ()=>{
     try{
// connection
// Connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(mongoDB_url_need);
//  this is when we are getting into contact with our
// own collection there
  
const done_con_collection = mongoose.connection.useDb("DISCO_CHURCH");
   done_con_collection.on("open",()=>{
     console.log("Database is connected")
   }) 

done_con_collection.on("error",()=>{
             console.log("Not connected");
         })
     }catch(err){
         console.log(err)
     }
}
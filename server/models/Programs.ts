import mongoose from  "mongoose"

//  scchema for the Program


const Schema_Program = new mongoose.Schema({
     nameProgram:{
          type : String,
           required:true

     },
     Profile:{
         type : String,
         required:[true ,"Please Bring Profile"]
     }
     ,
     Special_Guest:{
         type :Array,
         default : []
     },
    Starting_Data:{
         type : Date,
         required:false
    },
Specific_Time : { 
     type:String,
    required:false
},
 short_note:{
     type:String,
     required:false
     ,
     default:"there is a program"
 }
},{
     timestamps:true
})
export default mongoose.models.Schema_Program || mongoose.model('Programs', Schema_Program);

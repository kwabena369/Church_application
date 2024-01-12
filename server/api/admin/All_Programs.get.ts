import { Programs } from "~/server/models";
import user from "~/server/models/user"
export default defineEventHandler(async()=>{


     try{
    
        //   all_Program
         
         let all = await Programs.find() 

    return{
         result:true,
         values:all
    }
     }catch(err){
         console.log(err)
         return{
             result:false,
             values:null
         }
     }

     
     

})
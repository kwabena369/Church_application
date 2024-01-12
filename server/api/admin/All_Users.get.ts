import user from "~/server/models/user"
export default defineEventHandler(async()=>{


     try{
    let all = await user.find();
    console.log(all)

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
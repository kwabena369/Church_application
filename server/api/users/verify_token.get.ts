import jwt from "jsonwebtoken"
import user from "~/server/models/user"

export default defineEventHandler(async (event)=>{
let done = getQuery(event)


  let outcome:any = done
//     verification of the token
try{
    let isgood:any = jwt.verify(outcome.token,"there_is_nothing");

    //  get the id
     let id_user = isgood.id
 let is_user_there  = await user.findOne({_id : id_user})
 console.log(is_user_there)
 if(is_user_there){

    return{
        success:true,
         user_now:is_user_there
    }

}else{
    return{
        success:false,
          massage:"Fake _Token"
    }
 }


}catch(err){
    return{
        success:false,
        massage:"server_error"
    }

}



    

})
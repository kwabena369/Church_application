import { users } from "~/server/models";
import Email_Sender from "~/composables/useEmail";

//  with the user of the jwt we make the expiry like
import jwt from 'jsonwebtoken';


export default defineEventHandler(async (event)=>{
    //   reading what in the body
    let content = getQuery(event);
     console.log(content)

    //   finding the user
     try{
let user_is_there = await users.findOne({useremail:content.useremail})
console.log(user_is_there)

if(user_is_there){
     console.log(user_is_there.id)

     let payload_there = {
         id : user_is_there.id
     }

     let link_reset = 
     jwt.sign(payload_there,"there_is_nothing", 
     { expiresIn: '2d' })

link_reset =       
`http://localhost:3000/new_Password/?token_there=${link_reset}`


 console.log(link_reset)
let real_deal  = `User ${user_is_there.firstname}
      reset Link is ${link_reset}`


      Email_Sender().
      Send_Normal(user_is_there.useremail,real_deal,"Noay")


    //    here is the reply
     let reply_there = JSON.stringify({success:true})
     return reply_there

}else{
  let _reply_there = 
  JSON.stringify({success:false ,
    massage:"there is an error"})



return _reply_there
}

}catch(err){
         console.log(err)
         return{
             success:false,
             massage:"Error_at_Server"
         }
     }

})
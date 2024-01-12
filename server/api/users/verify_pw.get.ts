import jwt from "jsonwebtoken";
import user_here from '~/server/models/user';
import bcrypt from "bcryptjs"
 export default defineEventHandler(async(event)=>{
   
    //   getting the query info
     let value_there:any = getQuery(event);
    // verification of the token
    console.log(value_there)
    const env_thing = useRuntimeConfig();
     let is_good:any = jwt.verify(value_there.user_token,
        env_thing.my_screct || 'default_secret')
        
        if(is_good){
            //  finding the user and then updating it
             let user_there_and_pw_good = 
             await user_here.findOne({_id:is_good.id})
            //  at here find the user and then make use of the bcrypt to 
            //   verify it
    
             if(user_there_and_pw_good){
                let isright = 
           await  bcrypt.compare(value_there.current_pw,user_there_and_pw_good.userpassword);
                 if(isright){
                    console.log("user info right")
            //  then finding the one and updating it 
           let done_updating =  await user_here.findByIdAndUpdate({_id:is_good.id},{userpassword:value_there.new_pw});
             if(done_updating){
                return{
                    success:true,
                    massage:"ready"
                }

             }else{
                return{
                    success:false,
                    massage:"not"
                }

             }
    
            
                 }else{
                    return{
                     success:false,
                     massage:"not"
                 }
                 }
                
     
        
        }else{
 
            console.log("user _info_not good")
             return{
                 success:false,
                 massage:"User_Info_Incorrect"
             }
             
        }

        }
})
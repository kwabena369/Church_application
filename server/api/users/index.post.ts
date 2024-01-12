import users from "~/server/models/user"

//  for this is the registration of the user

export default defineEventHandler( async (event)=>{
     
    // here we are kind of destructing of the thing
    //  there in the body
     const info_there = await readBody(event)
    
console.log(info_there)

    //  here we are checking if useremail is already there 
     let is_email_there = await users.findOne({useremail:info_there.useremail})

      if(is_email_there){
 

 //   meaning that user is there in the system
 return {
    success : false,
    massage:"User already exist"
}

      }else{
       
        try{
            let one_here = await users.create({
               firstname : info_there.firstname,
               lastname : info_there.lastname,
               useremail : info_there.useremail,
               userpassword : info_there.userpassword,
                userphone : info_there.userphone,
                userdate : info_there.userdate
                
            })
    
           
            if(one_here){
   //    after the signing up the user is sent
   console.log("it is done")
   
   return{
        success:true,
        massage:"User created"
   }
               }else{
                   return{
                       success:false,
                       massage:"User not created"
                  }
            }
    }
          catch(err){
           return{
               success:false,
               massage:"User not created"
          }
          }
      }
    //   creation of the user


    
})
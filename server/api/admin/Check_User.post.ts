import jwt from 'jsonwebtoken';
import userDB from '~/server/models/admin';


// Import useRuntimeConfig and readBody based on your project structure
const env_secret = useRuntimeConfig();


   

//  for the other kind there is   
export default defineEventHandler(async (event) => {
  // For other person
  let outcome = await readBody(event);
  console.log(outcome)
  if(outcome !== undefined){ 

     try{
        //  here is the use of the jwt
     const outcome_there=   jwt.verify(outcome,
      env_secret.my_screct || 'default_secret')
      // console.log(outcome_there)
      //  finding the user 
       const one_there = await userDB.findById(outcome_there.id)
console.log(one_there)

return one_there
     }catch(err){ 
      console.log(err)
     }

  }else{
    console.log("nothing")
  }
   
})

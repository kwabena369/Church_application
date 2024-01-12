  
  
  import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  import admin from "~/server/models/admin"
  interface User_there {
    userpassword: string;
    useremail: string;
    username: string;
    _id: number;
    userProfile: string;
    token: string | null;
  }
export default defineEventHandler(async(event)=>{
      
    try {
        const isthere_one = await readBody(event);
        // Find the user by email
        const user_admin: User_there | null = 
        await admin.findOne({ useremail: isthere_one.useremail });
        
        if (user_admin) {
          // console.log(user)
          // Compare the provided password with the stored hashed password
          const isPasswordValid = 
          await bcrypt.compare(isthere_one.userpassword, user_admin.userpassword);
    
          //  console.log(isPasswordValid)
          if (isPasswordValid) {
            // Generate a JWT token for the user
            const id_payload = {
              id: user_admin._id,
            };
             
            const env_thing = useRuntimeConfig();
            const token_now: string = jwt.sign(id_payload,
               env_thing.my_screct || 'default_secret',
                { expiresIn: '4h' });
                user_admin.token = token_now;
    
            return {
              result: true,
              id: user_admin._id,
              userProfile: user_admin.userProfile,
              firstname: user_admin.username,
              token: user_admin.token,
            };
          } else {
            return {
              result: false,
              message: 'Password_Not',
            };
          }
        } else {
          return {
            result: false,
            message: 'Not_User',
          };
        }

    }catch(err){
console.log(err)
 return false
 }    

})
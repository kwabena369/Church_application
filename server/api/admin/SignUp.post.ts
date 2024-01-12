import { Admin } from "~/server/models";
//  admin signingUp and others
export default defineEventHandler(async(event)=>{
    //   getting the content
     const value_there = await readBody(event);
  
    //    creating of the new admin
     const done_admin_creation  = await Admin.create({
        username : value_there.username,
        useremail : value_there.useremail,
        userpassword : value_there.userpassword,
        Kind_Admin : value_there.Kind_Admin
     })
    //   Checking if the admin saved
    if(done_admin_creation){
         console.log("there is an admin")
         console.log(done_admin_creation);
    }else{
         console.log("NOthing saved there")
    }
})
import user from "~/server/models/user"

export default defineEventHandler(async()=>{
//  here it is a get post
 let all_users_there = await user.find();

 return { 
     all_users : all_users_there
 }

})
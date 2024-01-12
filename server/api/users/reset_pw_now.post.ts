import user from "~/server/models/user"

export default defineEventHandler(async (event)=>{
    //   value
     let infor = await readBody(event)
            

       try {
        //  h-h
        let done_:any = infor
 let is_it_done =   await user.findByIdAndUpdate(
    {_id:done_.user_info},{userpassword:done_.pw})
console.log(is_it_done);

       } catch (error) {
        console.log(error)
       
        return {
             success : true,
              massage:"there is Error"
        } 
       }

})
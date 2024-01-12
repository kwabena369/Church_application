
export const Checking_Staff = () =>{
     


    //  for admin
     const admin_Token =  async (token:string)=>{
         
    
     try{
         
        let done = await fetch("/api/admin/Check_User",{
            method:"POST",
            body : token
         })
         

          if(done){
             return {
                result:true,
                values:done
             }
          }else{ 
            return{
            result:false
            }
          }

     }catch(err){
         console.log(err)
         return { 
            result : false
         }
     }       
     


     }



     return { 
         admin_Token
     }



}
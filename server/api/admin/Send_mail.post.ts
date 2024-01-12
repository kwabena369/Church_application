import nodemailer from "nodemailer"

export default defineEventHandler(async(event)=>{


    //  here getting staff from the querry
     const  container:any = await readBody(event)
     const email_value = container.email
      const subject =  container.content
      const html_content = container.html_element
      const Transportor = nodemailer.createTransport({
        service: 'gmail',
           host: 'smtp.gmail.com',
           port: 465,
               secure :true,
               auth:{
                  user :"boampongbismarck079@gmail.com",
                  pass : "zchjoleucidsxlns"
                 }
    })

    
    
    const mailOption = {
        from : "bpampongbismarck079@gmail.com",
        to : `${email_value}`,
         subject: subject,
        html  : html_content
    }
    
    
    Transportor.sendMail(mailOption,(err,done)=>{
        if(err){
            console.log(err)
              console.log("Email not send")
             return "email not sent"
    
        }else{
             console.log("email sent")
             return "email sent"
        }
     })


return {
     result : true
}

})
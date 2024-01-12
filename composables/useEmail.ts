import nodemailer from 'nodemailer';

//Sending of email 
  const Email_Sender=()=>{
//  for normal sending
     const Send_Normal =(to:string,content:string,subject:string)=>{
        //  Configurations
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
            from : "boampongbismarck079@gmail.com",
            to : to,
             subject: subject,
            html  : content
        }
        
        
        Transportor.sendMail(mailOption,(err,done)=>{
            if(err){
                  console.log("Email not send")
                 return "email not sent"
        
            }else{
                 console.log("email sent")
                 return "email sent"
            }
         })
     }
     return{
         Send_Normal
     }

 } 

 export default  Email_Sender
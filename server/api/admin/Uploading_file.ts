//  here is   package for the uploading o ht file
import { type MultiPartData} from "h3"
import {createStorage} from 'unstorage'
import fsliteRender from 'unstorage/drivers/fs-lite'
import  {randomUUID} from "node:crypto"
import Program from "~/server/models/Programs"

 

// here for setting the file storage 
 const storage = createStorage({
     driver :fsliteRender({base : 
        "./public/Uploaded_File/Programs"})
 })
const save_file = async(file:MultiPartData)=>{
    const ext = String(file.type).split("/")[1];  

     const  file_name = Date.now()+"-"+ randomUUID()+ "." + ext;

      try{ 
        await storage.setItemRaw(file_name,file.data)
return {
   result:true,
    file_name : file_name
}
      }catch(err){
         console.log(err)
          return {
             result : false
          }
      }
}



export default defineEventHandler(async(event)=>{
//  for the uploading 
const file_staff:any = await  readMultipartFormData(event)
 
   let Program_Name  = file_staff[1].data
    let outcome = Program_Name.toString("utf8")
      
 let outcome_now = await save_file(file_staff[0]) 
  
 if(outcome_now.result){
   
  try{
    let one_Program = await Program.create({
      nameProgram : outcome,
      Profile:outcome_now.file_name
     })
one_Program.save()
     
 console.log("Program_save_in_the_")
  }catch(err){
   console.log(err)  
  }
    }
 }
 )
//   here is different from what is in the react
 export default defineEventHandler(async(event)=>{

    //  here is for gettting the valuee
     const name_Program  = getQuery(event)
      console.log(name_Program.name_Program)
       return JSON.stringify({result : "all good"})
    })
<template>
    <div>


         
         <div class="all_wrapper">
             
            
             
            <div class="all_">

                 
                <span
                 v-for="one in all_Program" :key="one.id" class="
                 w-fit rounded-2xl text-center bg-blue-600
                 bg-opacity-50">

                  
                  <pre>
                    {{ one.nameProgram }}


                  </pre>

                  
                   <pre>

                    


            <img  :src="`/Uploaded_File/Programs/${one.Profile}`" alt="">
                   </pre>

                    
                </span>
            </div>

         </div>


    </div>
</template>

<script>
    export default {
        name:"Program",
         data() {
            return {
                all_Program:[]
            }
         }, 
        
        methods: {
            //  function for bringing the Program there   
            async Bring_Program_store(){
                try{

const outcome = await  fetch("/api/admin/All_Programs",{
    method:"GET"
})

console.log(outcome)
 if(outcome){ 
    let _POT_Programs =await outcome.json()
    
     this.all_Program = _POT_Programs.values
 
     
     
 }
}catch(err){
 console.log(err)
}


             }
       ,
        //  this is the memthod for getting the picture
         
      async   Return_Image_date(image_name){
            return  require.context(`@/assets/Uploaded_File/Programs/${image_name}`)
      
        }
       
         },
        async created() {
           await this.Bring_Program_store()
         },
    }
</script>

<style lang="scss" scoped>

</style>
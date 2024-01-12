<template>
    <div class="p-6">



<div class="bg-black
w-fit p-4
mb-3 text-white
  rounded-3xl text-3xl">
Service
</div>



        <div class="wrapper flex 
        flex-wrap space-y-2
        p-6
        border-t-4 w-[90%]
        m-auto
        items-center justify-between
        space-x-4">




            <ProgramCard
v-for="one in all_Program" :key="one.id" 
:name="one.nameProgram" :Profile="one.Profile" />
             

        </div>


        <!--  here is the wrapper for other element  -->
 
         <div class="outter_element">


             





         </div>



         
         <div class="all_wrapper">
             
            
             
            <div class="all_">

                 
                <span
                 v-for="one in all_Program" :key="one.id" class="
                 w-fit rounded-2xl text-center bg-blue-600
                 bg-opacity-50">

              
        

                  
                   <pre>

                    


            <img 
              alt="">
                   </pre>

                    
                </span>
            </div>

         </div>


    </div>
</template>

<script>
import Program_Card from '~/components/Program_Card.vue'
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
      
        },

        //  function to go to the program page
        Go_to(name){
         const router = useRouter()
          router.push({path:`/Users_Show/one/${name}`})    
        }
       
         },


        async created() {
           await this.Bring_Program_store()
         },
    }
</script>

<style lang="scss" scoped>
</style>
<template>
    <div
    class="flex flex-col 
    space-y-4
     ">

     
     
     <nuxt-link
              href="/Admin/Add_user"
              class="text-3xl font-sans
 m-auto               w-fit bg-yellow-500">
              Add_A_User
             </nuxt-link>



     <div class="search_Space
     w-fit m-auto bg-gray-900 bg-opacity-40
      p-4 
       "
      >
        <input type="text" name="" 
          class="outline-none
           p-2 rounded-3xl 
           placeholder-gray-900
           bg-gray-200
            bg-opacity-50
             text-center 
             text-2xl
            " placeholder="Enter Username" v-model="search_value" id="">
     </div>




     <div class="all_users flex flex-col
     w-fit m-auto p-2 
        rounded-2xl
    text-white 

         bg-gray-9000
          bg-opacity-10
      space-y-2 items-center justify-center ">
         


       <div class="mega_ flex flex-row items-center
       space-x-6">
         

         <div class="name text-center">
           <div class="title
           bg-gray-900
           w-fit rounded-xl
           p-4
           m-auto
           text-3xl font-semibold">
             Name 
           </div>

           <div class="value_
           flex flex-col
           space-y-10
           items-center
           justify-center
           ">
             
             <span class="one"
             v-for="one in filtered_value" :key="one._id">

             {{ one.firstname }} -{{ one.lastname }}

             </span>
           </div>
         </div>

         <div class="name text-center">
           <div class="title
           bg-gray-900
           w-fit rounded-2xl
           text-center
           p-4
           m-auto
           text-3xl font-semibold">
             Email 
           </div>

           <div class="value_
           flex flex-col
           items-center
           space-y-10
           justify-center
           ">
             
             <span class="one"
             v-for="one in filtered_value" :key="one._id">

            {{ one.useremail }}

             </span>
           </div>
         </div>

         <!--  for the date of birth -->

         <div class="name text-center">
           <div class="title
           bg-gray-900
           w-fit rounded-2xl
           text-center
           p-4
           m-auto
           text-3xl font-semibold">
             Birth-Day 
           </div>

           <div class="value_
           flex flex-col
           space-y-10
           items-center
           justify-center
           ">
             
             <span class="one"
             v-for="one in filtered_value" :key="one._id">

            {{ one.userdate }}

             </span>
           </div>
         </div>
       </div>




        

         
     </div>

    </div>
</template>

<script>


    export default {
        name:"Users"
        ,
        setup(){
    
             
            var all_there = ref([]);
            var search_value = ref("")
    
            definePageMeta({
    layout:"admin"
  })

//   the once we are going to iterate through now
  

const filtered_value = computed(()=>{
   return all_there.value.filter((one)=>{
        return one.firstname.includes(search_value.value)
    })
})


//  when there is the mounting of the component
  
onMounted(async() => { 
  
  
    try{

        const outcome = await  fetch("/api/admin/All_Users")

        
         if(outcome){
             let golden  = await outcome.json()
             console.log(golden.values)
              all_there.value =golden.values
             
             
         }
    }catch(err){
         console.log(err)
    }
 
})


return{
    filtered_value,
    search_value
}
        }
    }
</script>

<style  scoped>

</style>
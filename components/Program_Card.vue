<template>
    <div>

         <div class="card w-64  h-fit
        
         p-2
border-2 border-solid border-black
           rounded-3xl">
 <img 
 class="h-[170px] w-full"
 :src="`/Uploaded_File/Programs/${Profile}`"
  alt="">              
             <!-- card arad -->
 <div class="name text-2xl font-bold tracking-wider
  text-black
   bg-white
  text-center
   text-opacity-70">
    {{ name }}
 </div>
         </div>
         
    </div>
</template>

<script>
    export default {
        name:"Program_Card",
         props:{
             name:String,
             Profile:String
         }
          
    }
</script>

<style lang="scss" scoped>

</style>
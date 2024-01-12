<template>
    <div>

        <div class="single_form">
 
            Welcome {{ Admin }}
        </div>

         <div class="inout_section ">
 
             <label for="Special">Special Word</label>
             
            <input type="text" name="Special"
             v-model="Special_Word" id="">

              <!-- for the btn  -->
         
           
               <div class="btn_there
                text-center text-2xl font-seminbold
                 bg-blue-400
                   w-fit rounded-2xl p-2"> 
                 Save
               </div>
               
             </div>
    </div>
</template>

<script>
    export default {
        name:"Special_Word"
      ,  props:{
         Admin:{
            type:String,
            required:true
         }
        },

        setup(){
          definePageMeta({
    layout:"admin"
  })
        }
    }
</script>

<style lang="scss" scoped>

</style>
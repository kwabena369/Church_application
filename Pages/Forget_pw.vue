<template>
    <div 
    class=" 
    grid place-content-center wrapper_forget">

    <!-- for the error massage -->
 
    <div v-bind="Notification" class="massage">
         
    </div>
     <div class="enter_email">
        <input type="email" name="email" 
      v-model="email"
        placeholder="Enter Email Here"
         class="bg-gray-600 bg-opacity-60
          outline-none p-2 rounded-lg" id="">
     </div>
      
      
     <!-- btn -->
 <div @click="Mail_sending" class="btn_sending
 bg-blue-400  w-fit rounded-3xl ">
    Send_Mail
 </div>
</div>
</template>

<script>
    export default {
        name:"Forget_Pw"
        ,
        data() {
            return {
                email:"",
                  Notification:""  
             }
        },

 methods:{
    //  sending_mail
   async Mail_sending(){
  let {data} = await fetch(`/api/users/Forget/?useremail=${this.email}`)


   if(!data.success){
      this.Notification = data.massage
      }
   
}
 }
 }
</script>

<style lang="scss" scoped>

</style>
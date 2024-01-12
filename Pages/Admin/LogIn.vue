<template>
    <div
     class="w-[460px] mt-24 m-auto h-fit
     p-4 rounded-2xl 
     drop-shadow-xl
     text-white
     border-4 border-blue-400
      border-opacity-80
        border-solid ">
<div 
      class="sub_wrapper 
    
      p-1 w-fit m-auto
       items-center
       flex flex-col space-y-5">

        <!-- for title -->
          <div class="signIn
           font-sans text-2xl
       
           w-fit
           m-auto
           text-center">
           <div
         class="
         bg-center bg-cover 
          rounded-full w-24 h-24
           p-2
          bg-no-repeat
          bg-white
         bg-[url('assets/bg-images/admin_image.png')]"></div>
             <span class="cursor-pointer
             font-bold
         text-3xl 
            ">LogIn
             </span>
          </div>
        
           
        

          <!-- for the email
          -->
          <div class="useremail
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-useremail
" >
<input
 type="text"
  placeholder="Email"
  class="outline-none rounded-2xl 
   bg-opacity-20
  bg-gray-200 p-2"
 v-model="useremail"
>
</span>
          </div>
          <!-- for the password -->
          <div class="password
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-password
" >
<input
 type="password"
  placeholder="password"
  class="outline-none rounded-2xl 
   bg-opacity-20
  bg-gray-200 p-2"
 v-model="password"
>
</span>
 
          </div>

           

<!--  the btn -->
 <div class="btn_sending">
    <span
     class="bg-blue-600
     p-3 text-2xl
      font-sans
      text-center
      cursor-pointer
       rounded-2xl
      "
       @click="Send_info">
      LogIn
     </span>
 </div>


 <!-- for login -->
  <div class="flex
  flex-col font-sans items-center justify-center
  ">
  <nuxt-link  class="hover:underline" to="/Admin/SignUp">
    Login
  </nuxt-link>
  </div>
     </div>


    </div>


</template>


<script setup>
import { useUserStore} from '#imports';
import { useAuthenticateStore_Admin } from '~/stores/user_info';

// for info we need
// for the password
const password = ref("");
//  for the email
const useremail = ref("");
const router_man = useRouter()
// here is the function for sending the value

const Send_info = async() =>{
  

      let golden_thing = {
          useremail :useremail.value,
          userpassword : password.value
      }
      //  making use of the authenication
   let done = useAuthenticateStore_Admin()
    let is_there =  await done.Authenticate_User(golden_thing)     
console.log(is_there);

  
   if(is_there){
    router_man.push({path :"/Admin",
    query:{
        Admin:is_there.useremail
    }})
   }else{
     console.log("there is nothing")
   }
  


     }

    

definePageMeta({
layout:"admin"
})






// here is making the data available to
// the outside world

 
</script>

<style  scoped>

</style>
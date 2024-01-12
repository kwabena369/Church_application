<template>

  

    <div
     class="w-96 mt-5 m-auto h-fit
     p-4 rounded-2xl border-2 border-solid border-blue-200 ">

     <!-- here are the ingrediant
    -title
     -email
    -username
    -btn for sending
     -->
     <div 
      class="sub_wrapper 
    
      p-1 w-fit m-auto
       items-center
       flex flex-col space-y-5">

        <!-- for title -->
          <div class="signIn
           font-sans text-2xl
           text-gray-500
           w-fit
           m-auto
           text-center">
             <span class="cursor-pointer">
                Login
             </span>
          
          {{ error_massage }}
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
 type="email"
  placeholder="Email"
  class="outline-none rounded-2xl 
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
  bg-gray-200 p-2"
 v-model="password"
>
</span>
 
          </div>

           

<!--  the btn -->
 <div class="btn_sending">
    <span
     class="bg-blue-200
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
  <nuxt-link  class="hover:underline" to="/signup">SignUp</nuxt-link>

   <nuxt-link to="/Forget_pw"
    class="hover:underline hover:text-blue-500
           text-2xl font-sans"> Forget_Password</nuxt-link>
   
</div>
     </div>
    </div>
</template>
<script setup>
import { useUserStore} from '#imports';
import { useAuthenticateStore } from '~/stores/user_info';
// for the password
const password = ref("");
const error_massage = ref("");

//  for the email
const useremail = ref("");
const router_man = useRouter();
// here is the function for sending the value
const Send_info = async() =>{
     console.log(
     password.value,
     useremail.value
      )

      let golden_thing = {
          useremail :useremail.value,
          userpassword : password.value
      }
      //  making use of the authenication
   let done = useAuthenticateStore()
    await done.Authenticate_User(golden_thing)     
   let is_authenticated = storeToRefs(done.isAuthenticated)
  
   if(done.isAuthenticated){
    router_man.push({path :"/"})
   }else{
error_massage.value = done.massage
    }
  
  //  if(is_authenticated){
  //    } else{
  //      console.log("this is not good")
  //    }
     }

 
// here is making the data available to
// the outside world

 
</script>

<style  scoped>

</style>
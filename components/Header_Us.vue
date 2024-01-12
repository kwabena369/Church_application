<template>
  <div class="w-screen font-sans 
  pr-6 shadow-md hover:shadow-lg 
  bg-none
   justify-between flex flex-row 
  items-center">
    

    <div class="name_site font-bold text-6xl p-8">
      <span
      class="p-12
      italic
      tracking-widest
      text-white">
        DISCO
      </span>
    </div>

    <!--  this the link to the user show there -->
    <div class="Service">
     <nuxt-link href="/Users_Show">
     Service</nuxt-link>
    </div>
    <nav class="">
    

      <div v-if="isthere" class="golden 
    flex flex-row space-x-3 items-center justify-center

      ">
        <nuxt-link to="/Profile"
        class="
        bg-gradient-to-r from-rose-400
     via-fuchsia-500 
     rounded-3xl
     text-black
     font-semibold
     p-4
     text-2xl
    to-indigo-500 
    mr-4
        bg-transparent 
        ">
          {{ user.firstname }}
        </nuxt-link>

        <div
         @click="LogOut_User" class="log_out
         hover:bg-black 
         hover:text-white p-2
         text-3xl
         rounded-3xl cursor-pointer
          font-sans  ">
           LogOut
        </div>
      </div>
   


      <div v-if="!isthere" class="
      flex flex-row items-center
      justify-center space-x-4 font-bold
         text-2xl">
       
        <nuxt-link to="/sign_in">LogIn</nuxt-link>
        <nuxt-link to="/signup"
                      class="bg-yellow-300 p-4
                      rounded-2xl
                      hover:bg-black
                      hover:text-white">
                      SignUp
                    </nuxt-link>
        <!--  here is the section for the username -->
      </div>


    </nav>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue';
import { useUserStore, useAuthenticateStore } from '../stores/user_info';

const userStore = useUserStore();
const Auth_play_ground = useAuthenticateStore();
const isthere = ref(false);
const display_signUp_logIn = ref(false);
const user = ref(null);
// Initialize the values
user.value = userStore.getting_value().userInfo;
isthere.value = Auth_play_ground.isAuthenticated;

// Watch for changes in isAuthenticated
watch(() => Auth_play_ground.isAuthenticated, (newIsAuthenticated) => {
  isthere.value = newIsAuthenticated;
});
// Watch for changes in user information
watch(() => userStore.getting_value().userInfo, (newUserInfo) => {
  user.value = newUserInfo;
})



// Fetch user information and update the store on component mount
onMounted(async () => {
  const token_there = useCookie("token");


  // here is when there is nothing 
   if(token_there === undefined){
    display_signUp_logIn.value = true
   }else{
    display_signUp_logIn.value = false
   }


  const outcome = await fetch("/api/users/Check_User", {
    method: "POST",
    body: token_there.value,
  });

  const outcome_now = await outcome.json();

  const userinfo = {
    firstname: outcome_now.firstname,
    userprofile: outcome_now.userprofile,
    userId: outcome_now._id,
  };
  console.log("this is from the user")
   console.log(userinfo)
   user.value = userinfo

  userStore.setUserInfo(userinfo);
  Auth_play_ground.setAuthentication(true);
});

//  loging out 

const LogOut_User = ()=>{
  const userStore = useUserStore();
  //  setCookie("token",null)
   useCookie("token").value  = undefined
   let router = useRouter()
         router.push({path:"/sign_in"})

}
</script>

<style scoped>
  /* Add your styles here */
</style>

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
          <div class="signup
           font-sans text-2xl
           text-gray-500
           w-fit
           m-auto
           text-center">
             <span class="cursor-pointer">
                Sign_Up
             </span>
             <br>
              <pre>
                {{ Error_massage }}
              </pre>
          </div>   
          <!-- for the username -->
          <div class="firstname
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-firstname
" >
<input
 type="text"
  placeholder="Firstname"
  class="outline-none rounded-2xl 
  bg-gray-200 p-2"
 v-model="firstname"
>
</span>
 <!--here is for the 
     suggested username
  -->
 <span 
  ref="suggestion_username"
  class="suggestion_name">
     
 </span>
          </div>

          <div class="lastname
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-lastname
" >
<input
 type="text"
  placeholder="lastname"
  class="outline-none rounded-2xl 
  bg-gray-200 p-2"
 v-model="lastname"
>
</span>
 <!--here is for the 
     suggested username
  -->
 <span 
  ref="suggestion_username"
  class="suggestion_name">
     
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
  bg-gray-200 p-2"
 v-model="useremail"
>
</span>
          </div>


          <!-- for the userdate -->
          <div class="useremail
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-useremail
" >
<input
 type="date"
  placeholder="date"
  class="outline-none rounded-2xl 
  bg-gray-200 p-2"
 v-model="userdate"
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
      SignUp
     </span>
 </div>


 <!-- for login -->
  <div class="flex
  flex-col font-sans items-center justify-center
  ">
  <nuxt-link  class="hover:underline" to="/sign_in">Sign_In</nuxt-link>
 
</div>
     </div>


    </div>
</template>

<script setup>


// for info we need
const firstname = ref("");
const lastname = ref("");
// for the password
const password = ref("");
//  for the email
const useremail = ref("");
//  for the userdate
const userdate = ref(null);

//  for the displaying of error massage
 const Error_massage = ref("")

const suggestion_username = ref(null)

// here is the function for sending the value

const Send_info = async() =>{
    
      const {data} =await useFetch("/api/users",{
         method:"post",
         body:{
            firstname:firstname.value,
            lastname : lastname.value,
            useremail: useremail.value,
            userpassword: password.value,
            userdate:userdate.value
        }
       })
    

 if(!data.value.success){
   Error_massage.value = data.value.massage   
 } else{
   const router_space =  useRouter()
   router_space.push({path:"/"})
 }     
     }

  
      // here is the fucntion for the getting of the user
      //   id in the system
 
// here is making the data available to
// the outside world

 
</script>

<style  scoped>

</style>
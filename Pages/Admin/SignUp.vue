<template>
    <div
     class="w-[460px] mt-24 m-auto h-fit
     p-4 rounded-2xl 
     drop-shadow-lg
     
     border-4 border-blue-400
      border-opacity-80
        border-solid
      "
      >

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
       flex flex-col    text-white space-y-6">

        <!-- for title -->
          <div class="signup
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
            ">
                Sign_Up
             </span>
          </div>   
          <!-- for the username -->
          <div class="username
           flex flex-col space-y-2
           items-center justify-center
           ">
<span class="
input-username
" >
<input
 type="text"
  placeholder="Username"
  class="outline-none rounded-2xl 
  bg-gray-200
   bg-opacity-20 p-2"
 v-model="username"
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
  bg-gray-200
  bg-opacity-20  p-2"
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
  bg-gray-200
  bg-opacity-20  p-2"
 v-model="password"
>
</span>
 
          </div>

          <!--  for the kind of admin
             that is 
            currently been created
         -->
         <div class="kind_admin flex flex-row
         space-x-4
          items-center justify-center 
         font-bold
          text-2xl ">
  <input type="radio" id="superRadio" name="kind_admin" value="Super" class="golden" v-model="Kind_Admin" />
  <label for="superRadio">Super</label>

  <input type="radio" id="minorRadio" name="kind_admin" value="Minor" class="golden" v-model="Kind_Admin" />
  <label for="minorRadio">Minor</label>
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
      SignUp
     </span>
 </div>


 <!-- for login -->
  <div class="flex
  flex-col font-sans items-center justify-center
  ">
  <nuxt-link  class="hover:underline
  text-2xl font-sans
   "

   to="/Admin/LogIn">Login</nuxt-link>
 
</div>
     </div>


    </div>
</template>

<script >
 

 export default{
    name: "Admin_SignUp"
     ,
     data(){
      return{
 username:"",          
 useremail:""  ,      
 password:""      ,    
 Kind_Admin:null     
      }
     }
      ,setup(){

      definePageMeta({
    layout:"admin"
  })





     },

     methods:{
         
  async Send_info(){
  
      
  const {data} =await useFetch("/api/admin/SignUp",{
     method:"post",
     body:{
        username : this.username,
        useremail: this.useremail,
        userpassword: this.password,
        Kind_Admin: this.Kind_Admin
    }
   })

if(!data){
throw createError({
  statusCode:500,
  statusMessage:"Massage not here"
})
} else{

//  when there is the creastion of the admin

let content = {
    email : this.useremail,
    content:"Congrate -You are Now An Admin",
    html_element:"You can now logIN at blah blah"

}

   const done_ = await fetch("/api/admin/Send_mail",{
      method:"POST",
      body:content
   })
}     
 }
     }
      
  
    

    
 }




  

 
</script>

<style  scoped>

</style>
<template>
    <div class="wrapper
    grid place-content-center ">

    <div
     class="flex flex-col items-center 
     justify-center space-y-3
     w-fit m-auto">

     <!--  for the users previouse pw -->
      
      <div class="previouse_pw">
         <input type="password" name="pre_pw"
         class="outline-none rounded-2xl 
         p-3
         w-[170px]
  m-auto bg-gray-500 bg-opacity-60
         font-sans text-2xl"
         v-model="current_pw"
         placeholder="Enter Current Password" id="">
    
         <!-- here is the verify btn -->

        </div>

        <!-- for the users new pw
         -->
<div class="new_pw">

<input
type="password"
 class="
  outline-none rounded-2xl 
  w-[170px]
  m-auto
         p-3 bg-gray-500 bg-opacity-60
         font-sans text-2xl
 "
  name="new_pw"
  v-model="new_pw"
   placeholder="Enter You new password">
<!-- for saving the new pw -->
<div
@click="Verify_PW" class="
 bg-blue-500
 w-fit rounded-3xl
  text-3xl text-center
 verify_btn
 cursor-pointer
 m-auto">
   Save_Pw
</div>

</div>



    </div>

</div>
</template>

<script>
    export default {
        name:"reset_pw"
,
 data() {
    return {
        current_pw : "",
        new_pw:"",
        user_current_token:null
    }
 }, 
 
 mounted() {

 this.user_current_token =   useCookie("token")   
if(this.user_current_token === undefined){
    
        //   with the user of the power in the useRoute()
    let route = useRouter()
     route.push({path:"/sign_in"})
     
}
},
methods: {
    // method for the verification
    async Verify_PW(){
        //   take the input and send it
   

        // here is the thing if the value there is empty then 
        //  then redirection to the logIn page 

         let d_done = useCookie("token")   
         
 await 
 fetch(`/api/users/verify_pw/?current_pw=${this.current_pw}&&new_pw=${this.new_pw}&&user_token=${d_done.value}`,{
    method:"GET"
 }).then(
    async(res )=>{
          let outcome = await res.json()
    
           if(outcome.is_right){
            console.log("the password_is_right")
           }else{
            console.log("it is not good")
           }
        }
 )
    
          
     }
},

 
 }
</script>

<style lang="scss" scoped>

</style>
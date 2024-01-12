<template>
    <div>

        <!--  her is for the actions that the person there can do -->
           

         
         <div class="various_action">
             <p>
                  Administrator
             </p>
         </div>

          
          <!-- various actin -->
          
           <div class="real_Action
           
           w-fit m-auto
            flex
             flex-row
             items-center
             justify-center">


             <!-- for the user_there -->
          <nuxt-link to="/Admin/Users">
    <div class="users
     border-2 border-solid
     border-gray-700
      w-fit
      p-4
       h-24
        rounded-2xl">
       
       
      <span 
       class="info_sec
        text-2xl 
         border-2 border-solid
         rounded-3xl
          border-yellow-200
          font-sans
          ">
 
           Users_There
           
      </span>
      
    </div>


               </nuxt-link>

               <!--  here is btn for the creation of the 
              programs -->
              
              <nuxt-link 
               class="bg-blue-500
               w-fit rounded-3xl
               text-center
               font-sans
               text-white"
              to="/Admin/Programs">
            Make_Programs
            </nuxt-link>
               
            

         
            <!-- for the showing of all the programs -->
            <nuxt-link 
               class="bg-blue-500
               w-fit rounded-3xl
               text-center
               font-sans
               text-white"
              to="/Admin/Programs">
            Make_Programs
            </nuxt-link>
      
            <!--  here is the power for the admin to add use -->

           </div>
         
    </div>
</template>

<script>
    export default {
        name:"Admin_Page",
        setup(){
            definePageMeta({
    layout:"admin"
  })

        },
     
        methods: {
          async  Check_admin_token(){
                const router = useRouter()
            let Admin_Token = useCookie("Admin_Token");

              if(Admin_Token.value === undefined){
                 router.push({path :"/Admin/SignUp"})
              }else{
            //   check if there is nothing in the store
             const AdminStore =  useAdminStore();      
            //   admin_name
              let user_Admin = AdminStore.getting_value()
          
             if(user_Admin.userInfo.username === null){
         // then we are going to be setting the user info
                     let done_admin  =  Checking_Staff()
       let outcome =   await  done_admin.admin_Token(Admin_Token.value);
  if(outcome){
     let bing =  await outcome.values.json()
   
     
     let vital_info = {
         userId :  bing._id ,
          userProfile : bing.userProfile,
          username : bing.username
     }
     AdminStore.setUserInfo(vital_info);

     let name =  AdminStore.userInfo.username
 console.log(name)
  }else{ 
     console.log(outcome)
  }

         
             }
             
             
              }
            }
        },
mounted(){
    this.Check_admin_token()

}
    }
</script>

<style lang="scss" scoped>

</style>
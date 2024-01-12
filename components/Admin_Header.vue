<template>
    <div class="w-screen font-sans 
    p-1 shadow-md hover:shadow-lg 
    bg-none
     justify-between flex flex-row 
    items-center">
      
    <!-- here is for the three btn  -->
  
  
   
  
      <div class="name_site font-bold text-6xl p-8">
        <span
        class="p-12
        italic
        
        tracking-widest
        text-white">
          DISCO-<small class="text-2xl
          text-red-500">ADMIN</small>
        </span>
      </div>
  
   
  
      <nav class="">
        <div class="golden 
        bg-gradient-to-r from-rose-400
       via-fuchsia-500 
       
       rounded-3xl
       text-black
       font-semibold
       p-4
       text-2xl
      to-indigo-500 
      mr-4
  
        ">
          <nuxt-link to="/"
          class="
          bg-white 
          p-4 rounded-2xl">
            {{user.username  !== null ? user.username:username}}
          </nuxt-link>
        </div>
  
 

      </nav>
    </div>
  </template>
  
<script>

    export default {
        name:"Admin_Header",
        data() {
            return {
                username :"loading"
            }
        }

        ,
mounted() {

},
 methods: {

 },
setup() {   
 const golden =     useAdminStore()
   const user = ref(golden.getting_value().userInfo)
   
    // Watch for changes in user information
watch(() => golden.getting_value().userInfo, (newUserInfo) => {
  user.value = newUserInfo;
});


console.log(user.value)
return{
    user
}
}
 }
</script>

<style lang="scss" scoped>

</style>
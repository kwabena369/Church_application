<template>
    <div
    class="h-[100vh]
flex flex-col 
    ">


         <div class="wrapper
         w-24
           bg-black
           space-y-2
            bg-opacity-70
            fixed 
            top-1/2
            rounded-3xl
            p-2
             -translate-y-1/2
        flex flex-col items-center 
        justify-between
             ">

            <!--  Here are the various action  -->



            <nuxt-link to="/Admin/Users">
                <div class="image_ rounded-full bg-white 
                p-2
                 space-y-2
                 font-sans
                  text-xl
                flex flex-col items-center justify-center">
                    <img src="/stock/user_1144760.png"
                    class="w-10 h-10
                     
                    " alt="">
              <span class="bg-pink-400
              p-1 bg-opacity-90
              rounded-3xl">
                 USER
              </span>



                </div>   
            </nuxt-link>

                
            <nuxt-link to="/Admin/Programs">

                <div class="image_ rounded-full bg-white 
                p-2
                 space-y-2
                 font-sans
                  text-xl
                flex flex-col items-center justify-center">
                    <img src="/stock/user_1144760.png"
                    class="w-10 h-10
                     
                    " alt="">
              <span class="bg-pink-400
              p-1 bg-opacity-90
              rounded-3xl">
                 USER
              </span>



                </div>   
            </nuxt-link>

                
            

            
             
         </div>
        
    </div>
</template>

<script>
    export default {
        name:"Side_Bar"
    }
</script>

<style lang="scss" scoped>

</style>
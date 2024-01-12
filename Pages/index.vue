

 <template>
    <div>
<div class="massage flex flex-col items-center
justify-center h-full">
   <!--  real content -->
   <div class="first mt-32
   text-2xl text-gray-900 font-bold
    italic">
        The Only Disco Church
       </div>
    <div class="content w-fit p-10
    bg-gray-600 bg-opacity-50
    text-center
    mt-32
    rounded-3xl 
    m-auto flex flex-col items-center justify-center
    space-y-4  ">
        <div class="text-6xl
        text-white font-extrabold
        ">
      Jesus is Our Saviour !!!</div>


    </div>

    <!--  for the btn for the follow us and other -->

     
     <div class="
     mt-6
     flex flex-row space-x-4 
     items-center justify-center
     w-fit m-auto
      text-3xl font-bold
     
     follow_us_About">

 
       
      <!--  for the btn -->
 <nuxt-link to="/Following_page">

       <div class="follow
       p-4 rounded-full
       text-white
       cursor-pointer
      hover:bg-black
      hover:text-white
         bg-yellow-300 
         ">
         Follow Us
       </div>
      </nuxt-link>


       <div class="contact
        border-2 border-solid
        cursor-pointer
      hover:bg-black
      hover:border-transparent
      hover:text-white
        rounded-full
        p-4 border-yellow-300"
        @click="sendMail">

        Contact Us
       </div>
       

     </div>
 
   </div>
    </div>
 </template>
 
 <script>
// import Email_Sender from '~/composables/useEmail';
  export default {
        name:"landing_Page" 
      , 
      data(){
  return{
 use_info_there:[],
 golden_Man  :null
  }
   },
    created(){

    }
,
methods:{
  async  sendMail(){
     let done = await fetch("/api/admin/Send_mail",{
       method:"POST",
       body:{GOLDEN:"HOPE"}
     })

     if(done){
       console.log("there is hope")
     }else{
       console.log(nothing)
     }
    
        },
Go_there(){ 
        const  Megolden_Man = useRouter()
                  Megolden_Man.push({
                    path:"/Users_Show/Service"
                  })
                }
}    }
 </script>
 
 <style  scoped>
 
 </style>
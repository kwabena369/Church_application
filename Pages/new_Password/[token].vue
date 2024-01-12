<template>
      <div>

 

<pre>
</pre>



<div className="pw_Section
flex flex-col items-center justify-center
space-y-2 w-fit m-auto">

<div className="title">
Enter You New Password Mr {{ username }}
</div>

<div
className="new_Pw">
<input
v-model="current_pw"
type="password" class=
"outline-none p-2 rounded-2xl" id="" />
</div>

<div
class="new_Pw">
<input

type="password" class=
"outline-none p-2 rounded-2xl" id="" />
</div>



<div
@click="Send_reset"
class="btn bla">
Gothere
</div>

</div>
</div>
</template>

<script>

export default {
        name:"Token_there"
        ,

        data() {
            return {
                token_value:null,
                current_pw:null,
                error_massage : "",
                username:"",
                userid:null
            }
        },


async mounted() {
    //  getting the value 
     const outcome = useRoute()
  this.token_value =     outcome.params.token

//  for the verification of the token

if(this.token_value !== null){
    
    await fetch(`/api/users/verify_token/?token=${this.token_value}`,{
        method:"GET"
    }).then(async(res)=>{

 
        
         let outcome = await res.json()
        
          if(outcome.success){
         //  console.log(outcome)
        //     setting the value therere 
        this.username = outcome.user_now.firstname
        this.userid = outcome.user_now._id
            
          }else{
            this.error_massage = outcome.massage
          }
       
    })



}
 
 },
methods: {
   async Send_reset(){
         
//  here is the obj for sending the info
 let sending_info = {
     pw : this.current_pw,
     user_info :this.userid
 }

         let out_reset = await useFetch("/api/users/reset_pw_now",{ 
             method:"POST",
             body: sending_info
         })

        //  if(data.body.success){
        //     this.error_massage = data.sweet_massage
        //  }else{
             
        //  }
    }
},
    }
</script>

<style lang="scss" scoped>

</style>
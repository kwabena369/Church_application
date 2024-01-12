<template>
    <div>

        <div class="">
            <!-- Here  -->



             <div class="wrapper_doc
             w-fit m-auto
             flex flex-col items-center justify-center
             space-y-2">
        <div class="title_">
             <input
              v-model="Program_Name"
             type="text" 
             class="bg-transparent
              outline-none p-2
              rounded-2xl font-sans text-2xl" name="Program"
             placeholder="Enter Title" id="">
        </div>
             

    


             <div class="name">
                 <input type="file"
                  placeholder="Typing_Outcome"
                  @change="set_the_file"
                   name="name_Program"
                   id="">
             
                </div>

              <!--  the btn for sending the file -->
            
               <div
               @click="Send_file" class="send_file
               bg-blue-400
               bg-opacity-40
               rounded-full
                w-fit
                cursor-pointer
                m-auto
                ">
Send_file
               </div>
            </div>

            </div>

    </div>
</template>

<script>
    export default {
        name :"Make_Programs",
        data(){
             return{
                 file : null,
                 Program_Name:null
             }
        }
,
        methods: {
            //  here for setting the file 
             set_the_file(event){
                 
                //  for file storage 
             
                //    for the action of storing the file 
                 
                const [File_] = event.target.files; 
                //  here setting the file 
this.file = File_                 
             }

              ,
              
             async Send_file(){
    //  at this point there is the sending of the file
    const form_there = new FormData();
    form_there.append("file",this.file,this.file.name)
    form_there.append("Programs",this.Program_Name)
// for the fetch request to send it 
 
const outcome  = await fetch("/api/admin/Uploading_file",{
    method:"POST", 
    body:form_there
})
     

}
        },
        setup(){
            definePageMeta({
    layout:"admin"
  })
        }
         
    }
</script>

<style scoped>

</style>
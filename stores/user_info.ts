// store/user.ts
import { defineStore } from 'pinia';


//  interface for the user Infor
interface IUserInfo{
   userId: number|null,
   username:string|null,
   userProfile:string
}


export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo:  { 
      userId : null,
       username : null,
       userProfile : "default.jpg"
    } as IUserInfo,
  }),

  actions: {
    //  for the id
    setUserId(id: number | null) {
      this.userInfo.userId = id
          },
            //  for the username
    setUsername(username: string | null) {
      this.userInfo.username = username
          },
            //  for the userProfile
            setUserInfo(userInfo: IUserInfo) {
              this.userInfo = userInfo;
            },

     getting_value(){
       return{
         userInfo  : this.userInfo
       }
     }
  },
});


export const useAdminStore = defineStore('user_Admin', {
  state: () => ({
    userInfo:  { 
      userId : null,
       username : null,
       userProfile : "default.jpg"
    } as IUserInfo,
  }),

  actions: {
    //  for the id
    setUserId(id: number | null) {
      this.userInfo.userId = id
          },
            //  for the username
    setUsername(username: string | null) {
      this.userInfo.username = username
          },
            //  for the userProfile
            setUserInfo(userInfo: IUserInfo) {
              this.userInfo = userInfo;
            },

     getting_value(){
       return{
         userInfo  : this.userInfo
       }
     }
  },
});
















//  for the authenticate
interface UserInterface{
  useremail : string,
  userpassword : string
}


export const useAuthenticateStore = defineStore("authen_user",{
  
 //  for the state of the authentication
  state : ()=>({
      isAuthenticated : false,
      massage: "",
      result  : false
  }),
 
   actions:{
     
     // this are the actions that 
     // are going to use the value of the UserI
     // to authenticate the person there

  async   Authenticate_User({useremail,userpassword}:UserInterface){
    
         //  making the login fetch
         const {data} = await useFetch("/api/users/sign_in",{
              method : "POST",
               headers:{"Contenet-Type":"application/json"},
              body:{
                  useremail:useremail,
                  userpassword:userpassword
              }

         })

          // when there a value that is been been return
          //  thne there something 


          if(data.value?.result){
            //  console.log(data.value)
  // creation the token with the jwt thing there
   const token  = useCookie("token");
 //  saving the token at this new place
  if("token" in data?.value){
     token.value = data.value.token

  }else{
  this.result = data.value.result
  this.massage = data.value.message   
   this.isAuthenticated = data.value.result
  }
  //  then setting that the isauthnticated is true
 this.setAuthentication(true);
          }
     }
    ,
  // here is for authenticate
  setAuthentication(value:boolean) {
    this.isAuthenticated = value
        }
        // t
   
      }

 })

  // here is for admin
  
export const useAuthenticateStore_Admin = defineStore("authen_user",{
  
  //  for the state of the authentication
   state : ()=>({
       isAuthenticated : false
   }),
 
    actions:{
      
      // this are the actions that 
      // are going to use the value of the UserI
      // to authenticate the person there
 
   async   Authenticate_User({useremail,userpassword}:UserInterface){
     
          //  making the login fetch
          const { data} = await useFetch("/api/admin/LogIn",{
               method : "POST",
                headers:{"Contenet-Type":"application/json"},
               body:{
                   useremail:useremail,
                   userpassword:userpassword
               }
 
          })
 
               
  
        
        // console.log(data.value.useremail)
        if(data.value){ 
           const token  = useCookie("Admin_Token");
           if("token" in data?.value){
            token.value = data.value.token
         }
          return data.value
        }else{
           return false
        }
        
        

    
          }

    
        }
 
  })
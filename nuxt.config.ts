// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
 
  modules :["@nuxtjs/tailwindcss",
  "@pinia/nuxt"

],
  app :{
head:{
  title :"Church"
,
meta:[
{
  name:"description",content:"this is the making of sing"
}
]   
,
link:[
  {
    rel:"stylesheet",
    href: 'https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css'  }
]
}
},
  // this is for the runtimeconfig
   runtimeConfig:{
     mongo_db : process.env.mongodb_url,
     my_screct:process.env.secret_env
   },
   //here is the plugin tomake it run when the application 
   //is start
    nitro:{
      plugins:["~/server/index.ts"]
// this is the saying that the system need 
// to connect with the other once there
     } 
 
   ,
   tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...

  }
})


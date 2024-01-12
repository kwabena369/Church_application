<template>
<div

class="bg-[url('assets/bg-images/Church.jpeg')]
bg-cover bg-center bg-no-repeat
h-[150vh]
w-[100%]
items-center
flex
flex-col  justify-between
"
>
<!-- this is for the header that we are to use -->
<header-us />
<!-- here is for those pages that are going to be loaded
 -->

 <div class="container">
  <slot />


 </div>
 <Footer />
</div>
</template>
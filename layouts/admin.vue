<template>
    <div
     class="bg-[url('assets/bg-images/admin.jpg')]
     bg-cover bg-center 
     flex flex-col justify-between
     bg-no-repeat
     h-[170vh]">


        <Admin_Header />

        <!--  Header for the admin -->

        <Side-Bar/>
<slot />


<Footer />
    </div>
</template>


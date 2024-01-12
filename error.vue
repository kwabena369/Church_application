<template>
    <div>
       <div class="text-2xl">
Opp there is nothing here -{{ 
    error.statusCode }}
       </div>  
        
       <div>
        {{ error.Massage }}
       </div>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style  scoped>

</style>
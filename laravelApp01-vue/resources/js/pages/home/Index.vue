

<script setup lang="ts">
    import { Link } from '@inertiajs/vue3';
    import NavLayout from '../components/NavLayout.vue';
    defineOptions({layout: NavLayout})
    defineProps({
        message: {type: String, default: "Some Msg"},
        isLogged: {type: Boolean, default: false},
        count : Number
    })
</script>


<template>

    <div class="flex flex-col justify-center items-center py-12">
        <div class="border border-sm border-gray-300 rounded-lg p-8">
            <h1>Welcome to the Index Page</h1>
            <p>{{ message }}</p> <br>
             <p>IsLogged: {{ isLogged }}, Logged count {{ count }} </p>
        </div> 
        <p class="text-purple-500 hover:text-purple-700"> 
            <Link href="/show">Goto Show Page </Link> 
        </p>
   </div>

      
</template>
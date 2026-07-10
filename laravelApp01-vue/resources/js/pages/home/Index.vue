<script setup lang="ts">
    import { Link } from '@inertiajs/vue3';
    import { onMounted, ref } from 'vue';

    const props = defineProps({
        message: {type: String, default: "Some Msg"},
        count : {type: Number, default: 0},
        isLogged: {type: Boolean, default: false}
    })

    const count = ref(props.count);
    
    function countDown(){
        if(count.value > 0) {
            count.value--;
        }

        setTimeout(countDown, 1000);
    }

    onMounted(countDown);

</script>

<template>
    <div class="flex flex-col justify-center items-center py-12">
        <div class="border border-sm border-gray-300 rounded-lg p-8">
            <h1>Welcome to the Index Page</h1>
            <p>{{ message }}</p>
        </div> 
        <p class="text-purple-500 hover:text-purple-700"> 
            <Link href="/show">Goto Show Page {{ count }}</Link> 
        </p>
   </div>
      
</template>
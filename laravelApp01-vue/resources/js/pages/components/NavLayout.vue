<script setup lang="ts">

import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';




    const count = ref(1200);
    
    function countDown(){
        if(count.value > 0) {
            count.value--;
        }

        setTimeout(countDown, 1000);
    }

    onMounted(countDown);

</script>
<template>
    <nav class="flex justify-around align-center bg-blue-100 py-2 italic" >
        <div>DeSho ({{ (count > 60 ) ? Math.floor(count/60) + " mins "  :'' }} {{ count%60 }} secs)</div>
        <div>
            <ul class="flex gap-4">
                <li><Link href="" class="text-blue-500 hover:text-blue-700">Products</Link></li>
                <li><Link href="" class="text-blue-500 hover:text-blue-700">Blog</Link></li>
                <li><Link href="" class="text-blue-500 hover:text-blue-700">About</Link></li>
            </ul>
        </div>
    </nav>
    <slot></slot>
</template>
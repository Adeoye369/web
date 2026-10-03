<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import NavLayout from '../components/NavLayout.vue';
defineOptions({layout: NavLayout});
</script>



<template>
    <div>
        <div class="flex flex-col justify-center items-center py-12 w-full">
        <div class="border border-sm border-gray-700 rounded-lg p-8">
                <h2>This is Show Method</h2>
        </div>
        <p class="text-green-600 hover:text-green-800"> 
            <Link href="/"> ⬅️ Back to Index </Link> </p>
        </div>
    </div>

</template>
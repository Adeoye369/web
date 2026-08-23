<script setup>
    defineProps({ serviceList: Array})
</script>
<template>
    <div class="bg-blue-200 flex justify-center items-center rounded-xl shadow-lg p-4 m-4 max-w-[500px]">
        <slot></slot>
    </div>
    <hr>
        <ul>
            <li class="text-blue-200 text-shadow-md font-bold" 
            v-for="item in serviceList" :key="item">
            <slot name="item" :service="item"></slot>
            </li>
        </ul>
</template>
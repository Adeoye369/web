<script setup>
// import inertia from '@inertiajs/inertia'
defineProps({
    userInfo: String,
    age: Number
})
</script>
<template>
    <div>
        <h1>User Detail</h1>
        <p>{{ userInfo }}</p>
        <p><span>Age:</span> {{ age }}</p>
    </div>
</template>
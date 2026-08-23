<script setup>
import { Link } from '@inertiajs/vue3';

// import Layout from './components/Layout.vue';
// defineOptions({layout: Layout})

import AbLayout from './components/AbLayout.vue';
defineOptions({layout: AbLayout})

</script>
<template>
    <h2>About Page</h2>
    <Link href="/"> <span> << back Home </span> </Link>
</template>
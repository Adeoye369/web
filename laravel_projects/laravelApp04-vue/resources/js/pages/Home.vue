<script setup>
import { ref } from 'vue';
import { Head} from "@inertiajs/vue3";

// import Layout from "./components/Layout.vue";
// defineOptions({layout: Layout});

import Card from "./components/Card.vue";


const itemsList = ref([
    'Web Development', 
    'Character Animation', 
    'Character design', 
    'Youtube Content Creation',
    'Video Editing',]);

</script>
<template>
<Head title="Welcome" />


  <div class="flex flex-col justify-center items-center h-full">
    <h1 class=" font-bold">Welcome to the Home Page</h1>

    <Card :serviceList="itemsList">
      <div class="flex flex-col">
        <h2 class="text-xl font-bold">This is a Card Component</h2>
        <p>Card content goes here, we do all the write up for our site. 
        Let's see what you have to offer and we will get back to you asap!!</p>
      </div>
        <template #item="{service}">
          <span class="text-yellow-200">> </span>{{ service }}
        </template>
    </Card>

  </div>


</template>

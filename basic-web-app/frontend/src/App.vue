<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const message = ref('Waiting...')

onMounted(async ()=>{
  try {
    message.value = (await axios.get("http://localhost:3000/")).data.message
  } catch (error) {
    console.log(error)
  }
})

</script>

<template>
  <h1>{{ message }}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>

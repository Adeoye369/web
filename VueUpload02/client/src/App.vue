<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const message = ref("")

async function getMessage(){
  try {
    const result = await axios.get("http://localhost:3000/api/message")
    message.value = result.data.message

  } catch (error) {
    console.log(error)
  }
} 

onMounted(()=>getMessage())

</script>

<template>
  <h1>{{ message }}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>

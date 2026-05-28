<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue';

const hello = ref('')

const getHello = async()=>{
  try {
    const result = await axios.get("http://localhost:3000")
    hello.value = result.data.hello
  } catch (error) {
    console.log("Errror::", error)
  }
}

onMounted(()=>{
  getHello()
})

</script>

<template>
  <h1>{{ hello }}</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>

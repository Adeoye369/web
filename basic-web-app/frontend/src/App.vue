<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const message = ref('Waiting...')
const initForm = {name: '', price: null, description: ''}
const productForm = ref({...initForm})
const products = ref([])

const BASE_URL = 'http://localhost:3000'

async function postProduct(){
  try {
    const res = await axios.post(`${BASE_URL}/api/products`, productForm.value)
    console.log("NEW PRODUCT: ", res.data)

    if(res.status === 200){
      productForm.value = {...initForm}
      getProduct()
    }

  } catch (error) {
      console.log(error.response.data)
  }
}

async function getProduct(){
  try {
    const res = await axios.get(`${BASE_URL}/api/products`)
    console.log(res.data)
    products.value = res.data
      
  } catch (error) {
    console.log(error.response.data)
  }
}

async function initMsg(){
  try {
    message.value = (await axios.get(BASE_URL)).data.message
  } catch (error) {
    console.log(error)
  }
}
onMounted(()=>{
  initMsg()
  getProduct()
})

</script>

<template>
  <h1>{{ message }}</h1>
  <hr>
 <div class="product-add-section">
   <h2>Add Product</h2>
  <form action="" class="product-form" @submit.prevent="postProduct">
    <input type="text" label="name", name="name" placeholder="Product name..." v-model="productForm.name" />
    <input type="number" label="price", name="price" placeholder="your price.." v-model="productForm.price" />
    <textarea name="description" label="description" placeholder="Your Product Description" v-model="productForm.description" ></textarea>

    <button type="submit">Add Product </button>
  </form>
 </div>

 <div class="product-display-section">
  <h2>Products</h2>
  <div class="product-display" v-if="products.length > 0">
      <div class="product-single" v-for="product in products" :key="product.id">
          <h3>{{ product.name }} - <span>${{ product.price }}</span></h3>
          <p>{{ product.description }}</p>
      </div>
  </div>
  <div v-else>
    <h3>No Product Available 😒... </h3>
  </div>
 </div>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
.product-form{
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;
}

.product-display{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.product-single{
  width: 200px;
  border: 0.5px solid #444;
  padding: 5px;
  margin: 5px;
}

button{
  width: 150px;
  background-color: #333;
  color: aliceblue;
  border: 0.5px solid aliceblue;
  border-radius: 5px;
}
</style>

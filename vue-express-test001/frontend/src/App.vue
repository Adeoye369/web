<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const message = ref('Waiting...')
const products = ref([])
const initForm = {
  name:'',
  price: null,
  description: ''
}
const productForm = ref({...initForm})

async function postProduct() {

  try {
    const res = await axios.post('http://localhost:3000/api/products',
      productForm.value
    )
    if(res.status === 200){
      productForm.value = {...initForm}
      getProducts()
  }
    
  } catch (error) {
    console.log(error.response.data)
  }

}

async function getProducts(){
  try {
    const res = await axios.get("http://localhost:3000/api/products")
    products.value = res.data
  } catch (error) {
      console.log(error.response.data)
  }
}

async function initMsg(){
   try {
    message.value = (await axios.get("http://localhost:3000/")).data.message
  } catch (error) {
    console.log(error)
  }

}

onMounted(()=>{
  initMsg()
  getProducts()
})

</script>

<template>
  <h1>{{ message }}</h1>
<hr />
<main class="product-main">
  <div class="product-add-section">
    <h2>Add Product</h2>
      <form @submit.prevent="postProduct">  
        <div class="product-form" >
          <input label="name" type="text" name="name" v-model="productForm.name" placeholder="Product Name" />
          <input label="price" type="number" name="price" v-model.float="productForm.price" placeholder="Product Price">
          <textarea label="description" name="description" 
            v-model="productForm.description"
          placeholder="Write your product description ..."></textarea>
        </div>
        <button class="btn" type="submit">Add Product</button>
      </form>
  </div>

  <div class="product-display-section">
  <div class="product-head">
    <h2>Products</h2>
  </div>

  <div class="product-display" v-if="products.length > 0">
      <div class="product-single" v-for="product in products" :key="product.id">
        <h3>{{product.name}} - <strong>${{ product.price }},</strong></h3>
        <p>{{ product.description }}</p>
        <hr class="product-hr">
      </div>
  </div>
  <div v-else>
    <h3>No Product Availabe. 🙄 </h3>
  </div>
</div>
</main>

<hr />


  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped>
@import "theme.css";

p, h1{ 
  color: var(--accent2-theme);
}
hr{ border-color: var(--default-theme)}
hr.product-hr{border-color: var(--default-theme); border-width: .5px;}

::placeholder{
  color: #333;
  font-style: italic;
}
input,textarea{
  background-color: var(--accent-theme);
  color: var(--bg-dark-theme);
}

.product-display-section{
  padding-left: 30px;
}

.product-main{
  display: flex;
  justify-content: center;
}
.product-form{
  width: 30vw;
  gap: 10px;
  display: flex;
  flex-direction: column;
  
}

.product-display{
  display: flex;
  flex-wrap: wrap;
    gap: 20px;
}

.product-single{
  background-color: var(--default-theme);
  border: .5px solid var(--default-theme);
  border-radius: 10px;
  padding: 10px;
  width: 210px;
}
</style>

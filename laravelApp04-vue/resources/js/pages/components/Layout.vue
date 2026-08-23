
<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
 const timer = ref(0);
setInterval(()=>{timer.value++}, 1000)
</script>
<template>
    <div class="flex flex-col  min-h-screen w-full">
        <header class=" h-20 bg-yellow-300 flex  justify-center">
            <div class="text-2xl">🌸
                <span>({{ timer }})</span>
            </div>
            <nav>
                <Link href="/" class="text-yellow-900"> Home Page </Link>
                 <Link href="/about" class="text-yellow-900"> About Page</Link>
            </nav>
        </header>

        <main class="bg-blue-500 flex flex-col justify-center items-center grow">
            <slot></slot>
        </main>

        <footer 
            class="h-10 bg-gray-400 w-full flex justify-center" >
                <h3>Footer ©️{{ new Date().getFullYear() }}</h3>
        </footer>
    </div>
</template>
 
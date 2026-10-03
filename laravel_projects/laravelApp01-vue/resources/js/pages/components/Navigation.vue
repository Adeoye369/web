<script setup lang="ts">
import { onMounted, ref } from 'vue'

const countNum = ref(100)
const timeOut = ref(false)


const countDown = () => {
    countNum.value--

    if(countNum.value > 0){
        setTimeout(countDown, 3000)

        }else{ 
        timeOut.value = true
       }
}

onMounted(() => {
    countDown()
})

</script>

<template>
    <div
                    class="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                >
                    <h1 class="mb-1 font-medium">Let's get started</h1>
                    <p class="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                        Laravel has an incredibly rich ecosystem. <br />We
                        suggest starting with the following.
                    </p>
                    
                    <ul class="flex gap-3 text-sm leading-normal">
                        <li>
                            <a
                                href="https://cloud.laravel.com"
                                target="_blank"
                                class="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-1.5 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                            >
                                 {{!timeOut ? `Deploy now -  ${countNum}`: `Time up!` }}
                            </a>
                        </li>
                    </ul>
                </div>
</template>
<template>
    <div :class="`text-white ${ image === 'left' ? 'bg-dark-800' : 'bg-dark-900' }`">
        <div :class="`max-w-7xl mx-auto hidden lg:flex ${ image === 'left' ? 'flex-row-reverse' : 'flex-row' }`">
            <div class="p-4 w-full flex-grow flex flex-col items-center justify-center text-center">
                <h1 class="font-bold text-5xl mb-3">{{ $t(`home.section.${section}.title`) }}</h1>
                <h2 class="font-semibold text-2xl">{{ $t(`home.section.${section}.text`) }}</h2>
            </div>
            <div class="w-full flex-grow flex justify-center">
                <img :src="`/img/transparent/${section}.png`">
            </div>
        </div>
        <div class="flex justify-center lg:hidden relative">
            <img class="opacity-40" :src="`/img/transparent/${section}.png`">
            <div class="p-10 absolute w-full h-full flex flex-col items-center justify-center text-center">
                <h1 class="font-bold text-4xl mb-3">{{ $t(`home.section.${section}.title`) }}</h1>
                <h2 class="font-semibold text-xl">{{ $t(`home.section.${section}.text`) }}</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        section: String,
        image: String
    }
})
</script>
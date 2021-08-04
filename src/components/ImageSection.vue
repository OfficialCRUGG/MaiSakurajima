<template>
  <div class="h-screen w-full flex items-center justify-center relative" :style="`background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48503151260504207) 85%, rgba(0,0,0,1) 100%), url('/img/screenshots/${image}.png'); background-position: center; background-size: cover; background-attachment: fixed;`">
    <nuxt-link v-if="showGalleryLink" to="/gallery" class="text-white text-2xl md:text-3xl absolute bottom-5 right-5 md:bottom-10 md:right-10 lg:bottom-20 lg:right-20 cursor-pointer">{{ $t("home.imageSection.gallery") }} »</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: String,
    showGalleryLink: Boolean
  }
})
</script>
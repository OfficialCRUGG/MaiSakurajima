<template>
    <iframe class="fixed top-0 left-0" v-if="music" width="1" height="1" wmode="transparent" src="//www.youtube-nocookie.com/embed/DZHiA5A3Jpc?autoplay=1&loop=1&playlist=DZHiA5A3Jpc,tjGhU2zbA5c,K1PCl5D-IpU" frameborder="0" allowfullscreen />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            music: false
        }
    },
    created() {
        this.$nuxt.$on("toggleMusic", () => {
            this.music = !this.music
        })
    }
})
</script>
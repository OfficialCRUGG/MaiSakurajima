<template>
  <div>
    <div v-if="minimal" class="bg-dark-800 p-10 flex justify-between">
      <p class="text-white text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' class=\'h-6 inline\' alt=\'love\'>'])" /> | <nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link></p>
      <p class="text-white text-lg"><nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
    </div>
    <div v-else class="h-screen w-full flex items-center justify-center relative" :style="`background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48503151260504207) 85%, rgba(0,0,0,1) 100%), url('/img/screenshots/${image}.png'); background-position: center; background-size: cover; background-attachment: fixed;`">
      <p class="text-white absolute bottom-10 left-10 text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' class=\'h-6 inline\' alt=\'love\'>'])" /> | <nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link></p>
      <p class="text-white absolute bottom-10 right-10 text-lg"><nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: String,
    minimal: Boolean
  }
})
</script>
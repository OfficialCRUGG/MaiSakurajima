<template>
  <div>
    <div v-if="minimal" class="bg-dark-800 flex justify-between">
      <div class="hidden md:flex justify-between p-10 w-full">
        <p class="text-white text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' style=\'height: 1.5rem; display: inline;\' alt=\'love\'>'])" /> | <nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link></p>
        <p class="text-white text-lg"><nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
      </div>
      <div class="flex md:hidden text-center flex-col px-5 my-3 space-y-3">
        <p class="text-white text-lg"><nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link> | <nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
        <p class="text-white text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' style=\'height: 1.5rem; display: inline;\' alt=\'love\'>'])" /></p>
      </div>
    </div>
    <div v-else class="h-screen w-full flex items-end" :style="`background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48503151260504207) 85%, rgba(0,0,0,1) 100%), url('/img/screenshots/${image}.png'); background-position: center; background-size: cover; background-attachment: fixed;`">
      <div class="hidden md:flex justify-between p-10 w-full">
        <p class="text-white text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' style=\'height: 1.5rem; display: inline;\' alt=\'love\'>'])" /> | <nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link></p>
        <p class="text-white text-lg"><nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
      </div>
      <div class="flex md:hidden text-center flex-col px-5 mb-3 space-y-3">
        <p class="text-white text-lg"><nuxt-link class="underline" to="/team">{{ $t("footer.team") }}</nuxt-link> | <nuxt-link class="underline" to="/contact">{{ $t("footer.contact") }}</nuxt-link> | <nuxt-link class="underline" to="/contribute">{{ $t("footer.contribute") }}</nuxt-link> | <nuxt-link class="underline" to="/credits">{{ $t("footer.credits") }}</nuxt-link></p>
        <p class="text-white text-lg"><span v-html="$t('footer.madeBy', ['<img src=\'https://twemoji.maxcdn.com/svg/2764.svg\' style=\'height: 1.5rem; display: inline;\' alt=\'love\'>'])" /></p>
      </div>
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
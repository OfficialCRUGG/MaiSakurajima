<template>
  <div class="h-screen w-full flex items-center justify-center" :style="`background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48503151260504207) 85%, rgba(0,0,0,1) 100%), url('/img/screenshots/${ image }.png'); background-position: right; background-size: cover; background-attachment: fixed;`">
    <div v-if="page === 'gallery'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("gallery.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("gallery.header.subtitle") }}</h2>
    </div>
    <div v-else-if="page === 'quotes'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("quotes.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("quotes.header.wip") }}</h2>
    </div>
    <div v-else-if="page === 'team'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("team.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("team.header.subtitle") }}</h2>
    </div>
    <div v-else-if="page === 'contact'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("contact.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("contact.header.subtitle") }}</h2>
    </div>
    <div v-else-if="page === 'credits'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("credits.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("credits.header.subtitle") }}</h2>
    </div>
    <div v-else-if="page === 'contribute'" class="text-white text-center">
      <h1 class="text-7xl font-bold">{{ $t("contribute.header.title") }}</h1>
      <h2 class="text-4xl font-semibold mt-2">{{ $t("contribute.header.subtitle") }}</h2>
    </div>
    <div v-else>
      <div class="text-center text-white px-5">
        <h1 class="text-6xl md:text-7xl font-bold">Mai Sakurajima</h1>
        <h2 class="text-3xl md:text-4xl font-semibold mt-2">{{ $t("home.header.subtitle") }}</h2>
        <div class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 mt-5">
          <Button type="subreddit" users="11,900" link="https://www.reddit.com/r/ChurchofMaiSakurajima/" />
          <Button type="discord" users="800" link="https://discord.gg/FUArCyHxNX" />
        </div>
        <p class="absolute w-full left-0 mt-12 md:mt-24 text-lg opacity-50 cursor-pointer" @click="$nuxt.$emit('toggleMusic')">{{ $t("home.header.musicToggle") }}</p>
      </div>
      <div class="absolute left-0 bottom-0 w-full flex flex-col md:flex-row justify-between md:p-10 p-5 space-y-3 md:space-y-0">
        <div class="flex text-white space-x-3">
          <p v-for="lang in langs" :key="lang.value" @click="setLanguage(lang.value)" :class="`cursor-pointer  ${$i18n.locale === lang.value ? '' : 'opacity-50'}`">{{ lang.name }}</p>
        </div>
        <p class="text-white">{{ $t("home.header.notAffiliated") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    image: String,
    page: String
  },
  data() {
    return {

    }
  },
  computed: {
    langs() {
      let langs: any = []
      this.$i18n.availableLocales.forEach((lang) => {
        langs.push({
          name: this.$i18n.messages[lang]["lang.name"],
          value: lang
        })
      })
      return langs
    }
  },
  methods: {
    setLanguage(lang: string) {
      this.$i18n.locale = lang;
      localStorage.setItem('maisakurajima-lang', lang)
    }
  }
})
</script>
<template>
    <div>
        <Header page="contribute" image="5" />
        <div class="bg-dark-900 text-white py-10">
          <div class="max-w-9xl px-10 mx-auto py-10 text-lg">
            <h1 class="text-6xl font-bold mb-4">{{ $t("contribute.header.title") }}</h1>
            <a href="https://github.com/OfficialCRUGG/MaiSakurajima/wiki/Contributing-translations" target="_blank" class="underline">{{ $t("contribute.translation") }}</a><br>
            <a href="https://github.com/OfficialCRUGG/MaiSakurajima/issues/1" target="_blank" class="underline">{{ $t("contribute.code") }}</a><br>
            <nuxt-link to="/contact" class="underline">{{ $t("contribute.gallery") }}</nuxt-link>
          </div>
        </div>
        <Footer :minimal="true" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      categories: [
        {
          name: 'specialThanks',
          items: [
            ['satania', ['<a target="_blank" class="underline" href="https://satania.moe/">satania.moe</a>']],
            ['hivenGiggl', ['<a target="_blank" class="underline" href="https://hiven.io/">Hiven</a>', '<a target="_blank" class="underline" href="https://giggl.app">Giggl</a>']],
            ['phin', ['<a target="_blank" class="underline" href="https://twitter.com/phineyes">Phineas</a>']]
          ]
        },
        {
          name: 'restApis',
          items: [
            ['lanyard', ['<a target="_blank" class="underline" href="https://github.com/phineas/lanyard">Lanyard</a>', '<a target="_blank" class="underline" href="https://twitter.com/phineyes">Phineas</a>', '/team']],
          ]
        },
        {
          name: 'npmLibraries',
          items: [
            ['noAuthor', ['<a target="_blank" class="underline" href="https://vuejs.org/">Vue.js</a>']],
            ['noAuthor', ['<a target="_blank" class="underline" href="https://nuxtjs.org/">Nuxt.js</a>']],
            ['author', ['<a target="_blank" class="underline" href="https://pwa.nuxtjs.org/">@nuxtjs/pwa</a>', '<a target="_blank" class="underline" href="https://nuxtjs.org/">Nuxt.js</a>']],
            ['author', ['<a target="_blank" class="underline" href="https://vue-i18n.intlify.dev/">vue-i18n</a>', '<a target="_blank" class="underline" href="https://github.com/kazupon">Kazuya Kawaguchi</a>']],
            ['noAuthor', ['<a target="_blank" class="underline" href="https://windicss.org/">Windi CSS</a>']],
            ['author', ['<a target="_blank" class="underline" href="https://github.com/eggsy/vue-lanyard">vue-lanyard</a>', '<a target="_blank" class="underline" href="https://eggsy.xyz/">EGGSY</a>']],
            ['author', ['<a target="_blank" class="underline" href="https://github.com/SeregPie/VueWordCloud">VueWordCloud</a>', '<a target="_blank" class="underline" href="https://github.com/SeregPie">Sergej Sintschilin</a>']],
          ]
        }
      ]
    }
  }
})
</script>
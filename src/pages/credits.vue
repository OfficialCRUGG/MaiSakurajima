<template>
    <div>
        <Header page="credits" image="6" />
        <div class="bg-dark-900 text-white py-10">
          <div class="max-w-9xl px-10 mx-auto py-10 text-lg">
            <h1 class="text-6xl font-bold mb-4">{{ $t("credits.header.title") }}</h1>
            <div v-for="category in categories" :key="category.name">
              <h2 class="text-4xl font-bold mb-1 mt-8">{{ $t(`credits.${category.name}`) }}</h2>
              <ul class="list-inside list-disc text-lg">
                <li v-for="item in category.items" :key="item" v-html="$t(`credits.${category.name}.${item[0]}`, item[1])" />
              </ul>
            </div>
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
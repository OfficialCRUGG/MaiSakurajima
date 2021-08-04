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
  head() {
    return {
      title: 'Contribute - Mai Sakurajima',
    }
  }
})
</script>
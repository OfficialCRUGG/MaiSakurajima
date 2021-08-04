<template>
    <div>
        <Header page="contact" image="6" />
        <div class="bg-dark-900 text-white py-10">
          <div class="max-w-9xl px-10 mx-auto py-10 text-lg">
            <h1 class="text-6xl font-bold mb-4">{{ $t("contact.header.title") }}</h1>
            <p><a class="underline" href="https://github.com/OfficialCRUGG/MaiSakurajima/issues">{{ $t("contact.issues") }}</a> {{ $t("contact.others") }}</p>
            <ul class="list-inside list-disc">
              <li><a class="underline" href="mailto:hello@crugg.de">{{ $t("contact.email") }}</a></li>
              <li><a class="underline" href="https://twitter.com/CRU_GG">{{ $t("contact.twitter") }}</a></li>
              <li><a class="underline" href="https://discord.com/users/228965621478588416">Discord</a></li>
              <li><a class="underline" href="https://t.me/dennispaulus">Telegram</a></li>
            </ul>
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
      title: 'Contact - Mai Sakurajima',
    }
  },
  data() {
    return {
      images: ["2", "1", "4", "5"]
    }
  }
})
</script>
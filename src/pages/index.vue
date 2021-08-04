<template>
  <div>
    <Header image="1" />
    <Section section="personality" image="right" />
    <Section section="looks" image="left" />
    <ImageSection image="2" :showGalleryLink="true" />
    <Section section="progression" image="right" />
    <WordCloud />
    <Footer image="3" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

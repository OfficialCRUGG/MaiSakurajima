<template>
    <div>
        <Header page="gallery" image="3" />
        <ImageSection v-for="image in images" :key="image" :image="image" />
        <Footer image="6" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      images: ["2", "1", "4", "5"]
    }
  }
})
</script>
<template>
    <div class="mt-3">
        <a :href="link" target="_blank" class="text-lg py-3 px-8 font-semibold rounded-full shadow-lg" style="background-color: #5865F2;" v-if="type === 'discord'">{{ $t("home.header.community.discord") }}</a>
        <a :href="link" target="_blank" class="text-lg py-3 px-8 font-semibold rounded-full shadow-lg" style="background-color: #FF4500;" v-else>{{ $t("home.header.community.reddit") }}</a>
        <p class="opacity-70 mt-3 mb-5">{{ $t("home.header.community.memberAmount", [users]) }}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        type: String,
        users: String,
        link: String
    }
})
</script>
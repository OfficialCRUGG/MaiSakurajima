<template>
    <div class="text-white bg-dark-800 p-10 text-center">
        <h1 class="font-bold text-4xl mt-10">{{ $t("home.wordCloud.title") }}</h1>
        <h2 class="font-semibold text-3xl mt-3">{{ $t("home.wordCloud.subtitle") }}</h2>
        <vue-word-cloud class="max-w-6xl bg-dark-900 rounded-2xl mx-auto m-10" style="height: 600px; width: 100%;" :words="words">
            <template slot-scope="{text}">
                <a :href="`${ $t('home.wordCloud.dicLink', [text]) }`" target="__blank" class="text-white text-5xl font-sans font-semibold word">{{text}}</a>
            </template>
        </vue-word-cloud>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

function generateWordsArray(string: string) {
    let array: any = []
    let words = string.split(',')
    words.forEach((word) => {
        array.push([
            word,
            1
        ])
    })
    return array
}

export default Vue.extend({
    data({ $i18n }: any) {
        return {
            words: generateWordsArray($i18n.messages[$i18n.locale]['home.wordCloud.words'] || $i18n.messages.en['home.wordCloud.words'])
        }
    }
})
</script>

<style>
.word {
    opacity: 80%;
    text-shadow: 0 0 0px rgba(255,255,255,0.5);
    transition-duration: .25s;
}

.word:hover {
    opacity: 100%;
    text-shadow: 0 0 40px rgba(255,255,255,0.5);
}
</style>
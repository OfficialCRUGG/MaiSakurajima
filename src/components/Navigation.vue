<template>
    <div>
        <div class="fixed bg-dark-700 flex items-center justify-center text-white w-full space-x-12 py-5 bg-opacity-70 z-99 backdrop-filter backdrop-blur-lg border-b-1 border-dark-200">
            <nuxt-link class="text-lg opacity-50" exact-active-class="opacity-100" v-for="link in links" :key="link.name" :to="link.path">{{ $t(link.name) }}</nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        type: String,
        users: String
    },
    data() {
        return {
            links: [
                {
                    name: 'nav.links.home',
                    path: '/'
                },
                {
                    name: 'gallery.header.title',
                    path: '/gallery'
                },
                {
                    name: 'quotes.header.title',
                    path: '/quotes'
                }
            ]
        }
    }
})
</script>
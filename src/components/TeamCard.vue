<template>
    <div class="rounded-lg shadow-lg" :style="`background-image: url('https://cdn.discordapp.com/avatars/${id}/${avatar}.png?size=128'); background-size: cover; background-position: center;`">
        <div class="p-5 flex space-x-3 items-center rounded-lg backdrop-filter backdrop-blur-sm" style="background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%);">
            <img :src="`https://cdn.discordapp.com/avatars/${id}/${avatarWithEnding}?size=128`" height="100px" width="100px" class="rounded-full">
            <div class="flex flex-col">
                <h1 class="text-4xl font-bold">{{ username }}<span class="text-2xl opacity-50 font-semibold">#{{ discriminator }}</span></h1>
                <div class="flex items-center space-x-1">
                    <div :class="`${getColor(this.status)} h-3 w-3 rounded-full`"></div>
                    <p>{{ $t(`team.memberCard.status.${status}`) }} | </p>
                    <img :src="`https://twemoji.maxcdn.com/svg/${countryEmojis[country]}.svg`" class="h-5">
                    <p>{{ $t(`team.memberCard.country.${country}`) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        id: String,
        avatar: String,
        username: String,
        discriminator: String,
        status: String,
        country: String
    },
    data() {
        return {
            countryEmojis: {
                germany: '1f1e9-1f1ea'
            }
        }
    },
    computed: {
        avatarWithEnding() {
            /// @ts-ignore
            if(this.avatar.startsWith('a_')) {
                return this.avatar + '.gif'
            } else {
                return this.avatar + '.webp'
            }
        }
    },
    methods: {
        getColor(status: any) {
            switch (status) {
                case 'online':
                    return 'bg-green-500'
                case 'idle':
                    return 'bg-yellow-500'
                case 'dnd':
                    return 'bg-red-500'
                case 'offline':
                    return 'bg-gray-500'
                default:
                    return 'bg-gray-500'
            }
        }
    }
})
</script>
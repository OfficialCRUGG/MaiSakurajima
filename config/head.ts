// Types
import { NuxtOptionsHead } from '@nuxt/types/config/head';

// Configuration
const head: NuxtOptionsHead = {
    title: 'Mai Sakurajima',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
}

export default head
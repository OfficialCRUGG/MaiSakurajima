// Config
import pwa from './modules/pwa'

// Types
import { NuxtOptionsModule } from '@nuxt/types/config/module'

// Configuration
const modules: NuxtOptionsModule[] = [
    ['@nuxtjs/pwa', pwa]
]

export default modules
// Types
import { NuxtOptionsPlugin } from '@nuxt/types/config/plugin';

// Configuration
const plugins: NuxtOptionsPlugin[] = [
    '~/plugins/I18n.js',
    '~/plugins/VueWordCloud.js',
    '~/plugins/VueLanyard.js'
]

export default plugins
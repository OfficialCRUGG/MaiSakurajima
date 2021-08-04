// Types
import { NuxtOptionsPlugin } from '@nuxt/types/config/plugin';

// Configuration
const plugins: NuxtOptionsPlugin[] = [
    { src: '~/plugins/I18n.js' },
    { src: '~/plugins/VueWordCloud.js' },
    { src: '~/plugins/VueLanyard.js' }
]

export default plugins
// Config
import buildModules from './config/buildModules'
import head from './config/head'
import modules from './config/modules'
import plugins from './config/plugins'

// Types
import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
    rootDir: './',
    srcDir: 'src',
    ssr: false,
    target: 'static',
    components: true,

    buildModules,
    head,
    modules,
    plugins
}

export default config
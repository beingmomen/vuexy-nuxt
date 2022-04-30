export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Vuxy-Nuxt',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: 'light-layout'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'image/x-icon', href: '/favicon.ico' },


        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/@core/scss/core.scss',
        '~/assets/scss/style.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/components/fontawesome.js',
        "~plugins/components/vee-validate.js",
        '~/plugins/mixins/ui/forms.js',
        '~/plugins/mixins/ui/transition.js',
        '~/plugins/mixins/ui/layout.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        "@nuxtjs/i18n",
        'cookie-universal-nuxt', [
            "vue-toastification/nuxt",
            {
                timeout: 3000,
                draggable: false,
                position: "top-center",
            },
        ],
    ],

    i18n: {
        lazy: true,
        langDir: 'locales/',
        locales: [
            { code: 'ar', iso: 'ar-EG', file: 'ar', dir: 'rtl' },
            { code: 'de', iso: 'de-AT', file: 'de', dir: 'ltr' },
            { code: 'en', iso: 'en-US', file: 'en', dir: 'ltr' },
        ],
        defaultLocale: 'ar',

    },

    auth: {
        strategies: {
            local: {
                token: {
                    property: 'idToken',
                },
                endpoints: {
                    login: { url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE`, method: "post" },
                    user: false
                },
            },
        },
        redirect: {
            login: '/dashboard',
            logout: '/login',
            callback: '/dashboard',
            home: '/dashboard'
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    env: {
        login: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE",
        register: "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd81BzrVH1na5-xuVw5sBT9at4rqjIBkE"
    }
}
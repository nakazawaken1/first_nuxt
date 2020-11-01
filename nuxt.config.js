export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'login',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    {
      src: 'ant-design-vue/dist/antd.less',
      lang: 'less',
    }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  auth: {
    redirect: {
      login: '/login', //未ログイン状態でアクセスした場合のリダイレクト先
      logout: '/', //ログアウト後の遷移先
      callback: '/callback', //コールバックルート
      home: '/',
    },
    strategies: {
      asana: {
        _scheme: 'oauth2',
        authorization_endpoint: 'https://app.asana.com/-/oauth_authorize',
        client_id: '1198967219935704',
        response_type: 'id_token',
        scope: ['openid', 'profile', 'email'],
      },
      google: {
        client_id: '379051524856-8usib3lrstrje6669vhn3gjm6c39q6gn.apps.googleusercontent.com',//secret: y6Q2RLPyU4Y2fzgiZ1Tv66gp
        response_type: 'id_token',
        scope: ['openid', 'profile', 'email'],
      },
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            'font-family': '-apple-system, BlinkMacSystemFont, Meiryo, sans-serif',
          },
          javascriptEnabled: true
        }
      }
    },
  },
  router: {
    base: process.env.BASE
  },
  generate: {
    dir: process.env.DIR
  }
}

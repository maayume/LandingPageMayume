// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
})

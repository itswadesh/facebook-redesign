export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
  webfontloader: {
    google: {
      families: ['Lato:400,700'], //Loads Lato font with weights 400 and 700
    },
  },
}

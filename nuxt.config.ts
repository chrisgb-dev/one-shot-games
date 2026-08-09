// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-12-19",
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxthub/core',
    'nuxt-seo-utils',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  site: {
    name: 'One-Shot Wonders',
    description: 'One-Shot Wonders is a casual tabletop gaming group based in Melbourne, running one-shot adventures for all skill levels.',
    url: 'https://one-shot-wonders.games',
    image: 'https://one-shot.games/images/osg-logo.png',
    ogImage: 'https://one-shot.games/images/osg-logo.png',
    twitterCard: 'summary_large_image'
  },
})
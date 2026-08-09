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
    url: 'https://www.one-shot-wonders.games',
    image: 'https://www.one-shot.games/images/osg-logo.png',
    ogImage: 'https://www.one-shot.games/images/osg-logo.png',
    twitterCard: 'summary_large_image'
  },
  seo: {
    meta: {
      // Basic SEO
      description: 'One-Shot Wonders is a casual tabletop gaming group based in Melbourne, running one-shot adventures for all skill levels.',
      author: 'Gerald Lock',

      // Nuxt SEO Utils already sets the below tags for you
      ogSiteName: 'One-Shot Wonders',
      ogLocale: 'en_AU',
      ogType: 'website',
      ogUrl: 'https://www.one-shot-wonders.games',
      ogTitle: 'One-Shot Wonders',

      // Other Nuxt SEO modules handle these
      ogImage: 'https://www.one-shot.games/images/osg-logo.png',
      robots: 'index, follow',
    }
  },
})
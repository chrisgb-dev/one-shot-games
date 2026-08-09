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
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Kanapka Blog",
      meta: [
        {
          name: "description",
          content: "Blog Kanapka Studios - Web Development and more!",
        },
        { name: "author", content: "Macios" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});

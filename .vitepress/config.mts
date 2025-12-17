import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/artbrut-documentation/',
  title: "Documentation artbrut.ch",
  description: "Documentation pour l'utilisation du CMS artbrut.ch",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Formulaires', link: '/formulaires' }
    ],

    sidebar: [
      {
        text: 'Formulaires',
        items: [
          { text: 'Guide formulaires', link: '/formulaires' }
        ]
      },
      {
        text: 'Pages exemples',
        items: [
          { text: 'Page exemple générale', link: 'https://dev.artbrut.ch/fr/exemple', target: '_blank' },
          { text: 'Page exemple événement ', link: 'https://dev.artbrut.ch/fr/exemple-evenements-page', target: '_blank' },
          { text: 'Page exemple actus', link: 'https://dev.artbrut.ch/fr/actus-sur-page', target: '_blank' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})

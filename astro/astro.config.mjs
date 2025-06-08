// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zendeshimarhu.github.io/',
  base: '/foo',
  integrations: [
    starlight({
      title: 'Technical Writing',
      defaultLocale: 'en',
      locales: {
        fr: {
          label: 'Français',
          lang: 'fr',
          title: 'Rédaction technique',
          sidebar: [
            {
              label: 'À propos',
              items: [
                { slug: 'foo/fr/about-this-blog' },
                { slug: 'foo/fr/migrate-to-astro' },
              ],
            },
          ],
        },
        en: {
          label: 'English',
          lang: 'en',
          title: 'Technical Writing',
          sidebar: [
            {
              label: 'About',
              items: [
                { slug: 'foo/en/about-this-blog' },
                { slug: 'foo/en/migrate-to-astro' },
                { slug: 'foo/en/assess-documentation-quality' },
              ],
            },
          ],
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/olivier-carrere/redaction-technique.org',
        },
      ],
      components: {
        Footer: './src/components/CustomFooter.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css',
          },
        },
        {
          tag: 'script',
          attrs: {
            type: 'module',
            src: 'https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js',
          },
        },
      ],
    }),
  ],
});

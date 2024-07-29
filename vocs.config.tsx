import { defineConfig } from 'vocs'
import pkg from './package.json'
import { sidebar } from './sidebar'
import remarkGemoji from 'remark-gemoji'

export default defineConfig({
  baseUrl: 'https://pontusx-docs.vercel.app',
  title: 'Pontus-X Docs',
  titleTemplate: '%s · Pontus-X Docs',
  description:
    'The official documentation for Pontus-X, a decentralized data and ai ecosystem.',
  head: (
    <>
    </>
  ),
  ogImageUrl: {
    '/': '/og-image.png',
    '/docs':
      'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
    '/op-stack':
      'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description'
  },
  iconUrl: { light: '/favicons/icon.png', dark: '/favicons/icon.png' },
  logoUrl: { light: '/icon-light.png', dark: '/icon-dark.png' },
  rootDir: ".",
  sidebar,
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/deltaDAO/pontusx-docs'
    }
  ],
  sponsors: [
    {
      name: 'Enterprises',
      height: 80,
      items: [
        [
          {
            name: 'OceanProtocol',
            link: 'https://oceanprotocol.com',
            image:
              'https://oceanprotocol.com/static/ae84296f3b9ccb7054530d3af623f1fa/logo.svg'
          },
          {
            name: 'Oasis Network',
            link: 'https://oasisprotocol.org/',
            image:
              'https://assets-global.website-files.com/63617eb68a66008a1a2130a0/639b268fde36b82f6ca20500_Network%20Logo.svg'
          }
        ]
      ]
    }
  ],
  theme: {
    accentColor: {
      light: '#004967',
      dark: '#00a19e'
    }
  },
  topNav: [
    { text: 'Docs', link: '/docs/getting-started', match: '/docs' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Contributing',
          link: 'https://github.com/deltaDAO/pontusx-docs/blob/main/.github/CONTRIBUTING.md',
        },
      ]
    }
  ],
  markdown: {
    remarkPlugins: [remarkGemoji],
  }
})

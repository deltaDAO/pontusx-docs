import type { Sidebar } from 'vocs'

export const sidebar = {
  '/docs/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Why Pontus-X', link: '/docs/introduction' },
        { text: 'Getting Started', link: '/docs/getting-started' }
        // { text: 'FAQ', link: '/docs/faq' }
      ]
    },
    {
      text: 'Legal',
      items: [
        { text: 'Privacy', link: 'https://docs.pontus-x.eu/privacy' },
        { text: 'Imprint', link: 'https://delta-dao.com/imprint' }
      ]
    }
  ]
} as const satisfies Sidebar

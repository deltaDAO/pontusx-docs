import type { Sidebar } from 'vocs'

export const sidebar = {
  '/docs/': [
    {
      text: 'Introduction',
      items: [
        { text: 'Overview', link: '/docs/introduction/overview' },
        {
          text: 'Vision, Mission and Values',
          link: '/docs/introduction/vision-mission-values',
        },
        // { text: 'FAQ', link: '/docs/faq' }
      ],
    },
    {
      text: 'Pontus-X Networks',
      items: [
        { text: 'Quick Start', link: '/docs/pontus-x-networks/quick-start' },
        {
          text: 'Validator Node Setup',
          link: '/docs/pontus-x-networks/node-setup',
        },
      ],
    },
    {
      text: 'Technical Architecture',
      collapsed: true,
      items: [
        {
          text: 'Overview',
          link: '/docs/technical-architecture/architecture-overview',
        },
        {
          text: 'Core Components',
          items: [
            {
              text: 'Access Controller',
              link: '/docs/technical-architecture/access-controller',
            },
          ],
        },
      ],
    },

    {
      text: 'Legal',
      items: [
        { text: 'Privacy', link: 'https://docs.pontus-x.eu/privacy' },
        { text: 'Imprint', link: 'https://delta-dao.com/imprint' },
      ],
    },
  ],
} as const satisfies Sidebar

import { defineConfig } from 'vocs'
import { sidebar } from './sidebar'
import remarkGemoji from 'remark-gemoji'

export default defineConfig({
  baseUrl: 'https://docs.pontus-x.eu',
  title: 'Pontus-X Docs',
  titleTemplate: '%s · Pontus-X Docs',
  description:
    'The official documentation for Pontus-X, a decentralized data and ai ecosystem.',
  head() {
    return (
      <>
        <script
          defer
          data-domain='docs.pontus-x.eu'
          src='https://plausible.io/js/script.js'
        ></script>
      </>
    )
  },
  ogImageUrl: {
    '/': '/og-image.png',
    '/docs':
      'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
    '/op-stack':
      'https://vocs.dev/api/og?logo=%logo&title=%title&description=%description',
  },
  iconUrl: { light: '/favicons/icon.png', dark: '/favicons/icon.png' },
  logoUrl: { light: '/icon-light.png', dark: '/icon-dark.png' },
  rootDir: '.',
  sidebar,
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/deltaDAO/pontusx-docs',
    },
  ],
  theme: {
    accentColor: {
      light: '#004967',
      dark: '#00a19e',
    },
  },
  topNav: [
    {
      text: 'Portals',
      items: [
        {
          text: 'Pontus-X Portal',
          link: 'https://www.pontus-x.eu/',
        },
        {
          text: 'EuProGigant Portal',
          link: 'https://portal.euprogigant.io/',
        },
        {
          text: 'moveID Portal',
          link: 'https://portal.moveid.eu/',
        },
        {
          text: 'Cooperants Portal',
          link: 'https://federator.cooperants.info/marketplace',
        },
        {
          text: 'Airbus Portal',
          link: 'https://airbus.pontus-x.eu/',
        },
        {
          text: 'Service-Meister Portal',
          link: 'https://servicemeister.pontus-x.eu/',
        },
        {
          text: 'Berlin State Portal',
          link: 'https://sbb.pontus-x.eu/',
        },
        {
          text: 'Flex4Res Portal',
          link: 'https://flex4res.pontus-x.eu/',
        },
        {
          text: 'Future Mobility Portal',
          link: 'https://marketplace.future-mobility-alliance.org/',
        },
        {
          text: 'EnergySHR Portal',
          link: 'https://www.energyshr.nl/',
        },
        {
          text: 'AgrospAI Portal',
          link: 'https://agrospai.udl.cat/',
        },
      ],
    },
  ],
  markdown: {
    remarkPlugins: [remarkGemoji],
  },
})

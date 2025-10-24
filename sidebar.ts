import type { Sidebar } from 'vocs'

export const sidebar = {
  '/docs/': [
    {
      text: 'Introduction & Overview',
      collapsed: false,
      items: [
        { text: 'Overview', link: '/docs/introduction/overview' },
        {
          text: 'Vision, Mission and Values',
          link: '/docs/introduction/vision-mission-values'
        },
        {
          text: 'Core Value Propositions',
          link: '/docs/introduction/core-value-proposition'
        },
        {
          text: 'Core Concepts',
          link: '/docs/getting-started/core-concepts'
        },
        // { text: 'Getting Started (WIP)', link: '' },
        // { text: 'Glossary of Terms (WIP)', link: '' },
        // { text: 'FAQ for Decision Makers (WIP)', link: '' },
        {
          text: 'Gaia-X Commitment',
          link: '/docs/introduction/gaia-x-commitment'
        }
        //  { text: 'Why Adopt Pontus-X Now (WIP)', link: '' },
        // { text: 'What is the Pontus-X Network', link: '/docs/introduction/network'}
      ]
    },
    /*{
      text: '2. Key Concepts',
      collapsed: true,
      items: [
        // { text: 'The Paradigm Shift (WIP)', link: '' },
       //  { text: 'Data and IP Sovereignty Mechanisms (WIP)', link: '' },
        // { text: 'Gaia-X Trust Layer (WIP)', link: '' },
        // { text: 'Monetization & Economic Models (WIP)', link: '' },
       //  { text: 'Data Sovereignty Business Opportunity (WIP)', link: '' },
       //  { text: 'Compliance and Regulation (WIP)', link: '' },
        {
          text: 'Interoperability',
          collapsed: true,
          items: [
           //  { text: 'Interoperability of Pontus-X Ecosystem (WIP)', link: '' },
           //  { text: 'Gaia-X Semantic Interoperability (WIP)', link: '' },
           //  { text: 'General Dataspace Interoperability (WIP)', link: '' }
          ]
        }
      ]
    },*/
    /*{
      text: '3. Use Cases & Business Value',
      collapsed: true,
      items: [
        { text: 'Build Your Own Pontus-X Data Space (WIP)', link: '' },
        { text: 'Join an Existing Pontus-X Data Space (WIP)', link: '' },
        { text: 'Consume Data to Enhance Data Products (WIP)', link: '' },
        { text: 'Share Data, Stay in Full Control (WIP)', link: '' },
        { text: 'Monetize Data (WIP)', link: '' },
        { text: 'Share/Monetize SaaS Offerings (WIP)', link: '' },
        { text: 'Build New Data Products (WIP)', link: '' },
        { text: 'Data Collaboration for Research & Industry (WIP)', link: '' },
        {
          text: 'Use Case Examples (WIP)',
          collapsed: true,
          items: [
            { text: 'Manufacturing (WIP)', link: '' },
            { text: 'Agriculture (WIP)', link: '' },
            { text: 'Aerospace (WIP)', link: '' },
            { text: 'Mobility (WIP)', link: '' },
            { text: 'Smart City (WIP)', link: '' },
            { text: 'Open Science (WIP)', link: '' }
          ]
        }
      ]
    },*/
    //{ text: 'Competitive Advantages and ROI', link: '' },
    /* {
      text: '5. Compliance & Regulation',
      collapsed: true,
      items: [
        {
          text: 'Data Act (WIP)',
          collapsed: true,
          items: [
            { text: 'Implications for Industry (WIP)', link: '' },
            { text: 'Pontus-X for Data Act Compliance (WIP)', link: '' }
          ]
        },
        { text: 'GDPR (WIP)', link: '' },
        { text: 'Other EU Regulations (WIP)', link: '' }
      ]
    },*/
    {
      text: 'Getting started',
      collapsed: false,
      items: [
        { text: 'Quick Start', link: '/docs/getting-started/quick-start' },
        { text: 'Introduction', link: '/docs/getting-started/introduction' },
        { text: 'Wallet Setup', link: '/docs/getting-started/wallet-setup' },
        {
          text: 'Pontus-X Ecosystem',
          link: '/docs/getting-started/pontus-x-ecosystem'
        },
        {
          text: 'Publication Guide',
          link: '/docs/getting-started/Publication-guide'
        },
        {
          text: 'Data Service Offerings',
          link: '/docs/getting-started/data-service-offerings'
        },
        //{ text: 'Consume Your First Asset (WIP)', link: '' },
        // { text: 'Join an Existing Data Space (WIP)', link: '' },
        {
          text: 'Standard Use Cases',
          collapsed: true,
          items: [
            { text: 'Introduction', link: '/docs/use-cases/introduction' },
            { text: 'Download Assets', link: '/docs/use-cases/download' },
            { text: 'Compute Assets', link: '/docs/use-cases/compute' },
            { text: 'Publish Assets', link: '/docs/use-cases/publish' }
          ]
        },
        {
          text: 'Migration',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/docs/migrations/overview' },
            {
              text: 'Mainnet Migration',
              link: '/docs/migrations/oasis-mainnet-migration'
            },
            { text: 'Success Program', link: '/docs/migrations/success' },
            { text: 'FAQ', link: '/docs/migrations/faq' }
          ]
        }
      ]
    },
    {
      text: 'Community & Governance',
      collapsed: true,
      items: [
     {
              text: 'Participant Registry',
              link: '/docs/participants-and-federators/ecosystem-participants'
            },
        {

            //{ text: 'Benefits of Operation (WIP)', link: '' },
            // { text: 'Portals & Marketplaces (WIP)', link: '' },
              text: 'Validators',
              link: '/docs/participants-and-federators/federators'
        },
       // {
         // text: 'Governance Model',
          // items: [
            /*  { text: 'Benefits of Governance (WIP)', link: '' },
            { text: 'Pontus-X Governance (WIP)', link: '' },
            { text: 'Ocean Enterprise Governance (WIP)', link: '' },
            { text: 'Gaia-X Governance (WIP)', link: '' } */
            //  ]
          // },
        { text: 'How to contribute', link: '/docs/contribute/overview' },
        { text: 'Repositories', link: '/docs/contribute/repositories' }
        // { text: 'Feedback and Iteration (WIP)', link: '' }
      ]
    },
    {
      text: 'Developer Resources',
      collapsed: true,
      items: [
        {
          text: 'Develop Algorithms for Compute-to-Data',
          link: '/docs/getting-started/buildCustomAlgorithmsForPontusX'
        },
        {
          text: 'Use Pontus-X Libraries',
          collapsed: true,
          items: [
            { text: 'Nautilus', link: 'https://nautilus.delta-dao.com/' }
            // { text: 'Pontus-X CLI (WIP)', link: '' }
          ]
        },
        {
          text: 'Pontus-X Networks',
          collapsed: true,
          items: [
            {
              text: 'Quick Start',
              link: '/docs/pontus-x-networks/quick-start'
            },
            {
              text: 'Validator Node Setup',
              link: '/docs/pontus-x-networks/node-setup'
            },
            { text: 'Test Network', link: '/docs/pontus-x-networks/testnet' },
            { text: 'Dev Network', link: '/docs/pontus-x-networks/devnet' }
          ]
        }
      ]
    },
    {
      text: 'Technical Reference',
      collapsed: true,
      items: [
        {
          text: 'Technical Overview',
          link: '/docs/technical-architecture/architecture-overview'
        },
        {
          text: 'Core Components',
          items: [
            {
              text: 'Market & Portals',
              link: '/docs/technical-architecture/portals'
            },
            {
              text: 'Access Controller',
              link: '/docs/technical-architecture/access-controller'
            },
            {
              text: 'Service Catalogue - Metadata Cache (Aquarius)',
              link: '/docs/technical-architecture/aquarius'
            },
            {
              text: 'Subgraph - Transaction Cache',
              link: '/docs/technical-architecture/subgraph'
            }
            /* { text: 'Distributed Ledger (WIP)', link: '' },
            { text: 'Smart Contracts (WIP)', link: '' } */
          ]
        },
        {
          text: 'Asset Metadata Standard (DDO)',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              link: '/docs/ddo_credential/ddo_intro',
              items: [
                {
                  text: 'W3C VCs & VPs',
                  link: '/docs/ddo_credential/w3c_credentials'
                },
                {
                  text: 'On-Chain Metadata',
                  link: '/docs/ddo_credential/on_chain'
                }
              ]
            },
            {
              text: 'Verifiable Presentation (DDO Schema)',
              link: '/docs/ddo_credential/ddo_schema',
              items: [
                {
                  text: 'Metadata',
                  link: '/docs/ddo_credential/metadata',
                  items: [
                    {
                      text: 'Algorithm Metadata',
                      link: '/docs/ddo_credential/algorithm_metadata',
                      items: [
                        {
                          text: 'Container',
                          link: '/docs/ddo_credential/container'
                        },
                        {
                          text: 'Algorithm Consumer Parameters',
                          link: '/docs/ddo_credential/algorithm_consumer_parameters'
                        }
                      ]
                    }
                  ]
                },

                {
                  text: 'Service',
                  link: '/docs/ddo_credential/service',
                  items: [
                    {
                      text: 'Files Object',
                      link: '/docs/ddo_credential/files_object'
                    },
                    {
                      text: 'Compute Object',
                      link: '/docs/ddo_credential/compute_object'
                    },
                    {
                      text: 'Service Consumer Parameters',
                      link: '/docs/ddo_credential/service_consumer_parameters'
                    }
                  ]
                },
                {
                  text: 'Credentials (Access Control)',
                  link: '/docs/ddo_credential/credentials'
                },
                {
                  text: 'License Object',
                  link: '/docs/ddo_credential/license_object',
                  items: [{ link: '/docs/ddo_credential/odrl_object' }]
                },
                {
                  text: 'Consumer Parameters',
                  link: '/docs/ddo_credential/consumer_parameters'
                },
                {
                  text: 'Language and Base Direction (i18n)',
                  link: '/docs/ddo_credential/language_i18n'
                },
                {
                  text: 'Lifecycle States',
                  link: '/docs/ddo_credential/lifecycle_states'
                },
                {
                  text: 'Remote Object',
                  link: '/docs/ddo_credential/remote_object'
                },
                {
                  text: 'Complete Overview (Schema)',
                  link: '/docs/ddo_credential/complete_overview'
                },
                { text: 'Changelog', link: '/docs/ddo_credential/changelog' }
              ]
            }
          ]
        },
       // { text: 'API and Integration Reference (WIP)', link: '' },
       // { text: 'Repositories (WIP)', link: '' }
      ]
    },
    /*{
      text: '10. Going Live',
      items: [
        { text: 'Overview (WIP)', link: '' },
        { text: 'Mainnet Migration (WIP)', link: '' },
        { text: 'Scaling and Best Practices (WIP)', link: '' },
        { text: 'Monitoring and Operations (WIP)', link: '' },
        { text: 'FAQ (WIP)', link: '' }
      ]
    },
    {
      text: '11. External Resources & Roadmap',
      items: [
        { text: 'Research Papers & Whitepapers (WIP)', link: '' },
        { text: 'Future Outlook (WIP)', link: '' }
      ]
      },*/
    {
      text: 'Legal',
      items: [
        { text: 'Privacy', link: '/privacy' },
        { text: 'Imprint', link: 'https://delta-dao.com/imprint' }
      ]
    }
  ]
} as const satisfies Sidebar

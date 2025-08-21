import type { Sidebar } from "vocs";

export const sidebar = {
  "/docs/": [
    {
      text: "1. Introduction & Overview",
      collapsed: false,
      items: [
        { text: "Overview", link: "/docs/introduction/overview" },
        { text: "Vision, Mission and Values", link: "/docs/introduction/vision-mission-values" },
        { text: "Core Value Propositon",
          items: [
            {  text: "Core Concepts", link: "/docs/getting-started/core-concepts" }
          ],
        },
        { text: "Getting Started", link: "" },
        { text: "Glossary of Terms", link: "" },
        { text: "FAQ for Decision Makers", link: "" },
        { text: "Gaia-X Commitment", link: "/docs/introduction/gaia-x-commitment" },
        { text: "Why Adopt Pontus-X Now", link: "" },
        { text: "Pontus-X Network", link: "/docs/introduction/network" }
      ],
    },
    {
      text: "2. Key Concepts",
      collapsed: true,
      items: [
        { text: "The Paradigm Shift", link: "" },
        { text: "Data and IP Sovereignty", link: "" },
        { text: "Gaia-X Trust Layer", link: "" },
        { text: "Monetization & Economic Models", link: "" },
        { text: "Data Sovereignty Business Opportunity", link: "" },
        { text: "Compliance and Regulation", link: "" },
        {
          text: "Interoperability",
          collapsed: true,
          items: [
            { text: "Interoperability of Pontus-X Ecosystem", link: "" },
            { text: "Gaia-X Semantic Interoperability", link: "" },
            { text: "General Dataspace Interoperability", link: "" }
          ],
        },
      ],
    },
    {
      text: "3. Use Cases & Business Value",
      collapsed: true,
      items: [
        { text: "Build Your Own Pontus-X Data Space", link: "" },
        { text: "Join an Existing Pontus-X Data Space", link: "" },
        { text: "Consume Data to Enhance Data Products", link: "" },
        { text: "Share Data, Stay in Full Control", link: "" },
        { text: "Monetize Data", link: "" },
        { text: "Share/Monetize SaaS Offerings", link: "" },
        { text: "Build New Data Products", link: "" },
        { text: "Data Collaboration for Research & Industry", link: "" },
        { text: "Use Case Examples",
          collapsed: true,
          items: [
            { text: "Manufacturing", link: "" },
            { text: "Agriculture",link: "" },
            { text: "Aerospace", link: "" },
            { text: "Mobility", link: "" },
            { text: "Smart City", link: "" },
            { text: "Open Science", link: "" }
          ],
        },
      ],
    },
    {
      text: "4. Competitive Advantages and ROI",
      collapsed: true,
      items: [
        { text: "Case for Competitiveness", link: "" },
        { text: "Calculating ROI: Tools and Examples", link: "" },
        { text: "Risk Mitigation: Staying Ahead of Competitors", link: "" }
      ],
    },
    {
      text: "5. Compliance & Regulation",
      collapsed: true,
      items: [
        { text: "Data Act",
          collapsed: true,
          items: [
            { text: "Implications for Industry", link: "" },
            { text: "Pontus-X for Data Act Compliance", link: "" }
        ],
    },
        { text: "GDPR", link: "" },
        { text: "Other EU Regulations", link: "" }
      ],
    },
    {
        text: "6. Community & Governance",
        collapsed: true,
        items: [
          { text: "Participants",
           items: [
            { text: "Benefits of Participation", link: "" },
            { text: "Participant Registry", link: "" }
           ]
          },
          { text: "Operators",
           items: [
            { text: "Benefits of Operation", link: "" },
            { text: "Portals & Marketplaces", link: "" },
            { text: "Validators", link: "" }    
           ]
          },
          { text: "Governance Model",
           items: [
            { text: "Benefits of Governance", link: "" },
            { text: "Pontus-X Governance", link: "" },
            { text: "Ocean Enterprise Governance", link: "" }, 
            { text: "Gaia-X Governance", link: "" }    
           ]
          },
          { text: "How to contribute", link: "/docs/contribute/overview" },
          { text: "Repositories", link: "/docs/contribute/repositories" },
          { text: "Feedback and Iteration", link: "" }
        ],
      },
    {
        text: "7. Getting started",
        collapsed: false,
        items: [
            { text: "Quick Start", link: "/docs/getting-started/quick-start" },
            { text: "Introduction", link: "/docs/getting-started/introduction" },
            { text: "Wallet Setup", link: "/docs/getting-started/wallet-setup" },
            { text: "Pontus-X Ecosystem", link: "/docs/getting-started/pontus-x-ecosystem" },
            { text: "Publication Guide", link: "/docs/getting-started/Publication-guide" },
            { text: "Data Service Offerings", link: "/docs/getting-started/data-service-offerings" },
            { text: "Consume Your First Asset", link: "" },
            { text: "Join an Existing Data Space", link: "" },
            { text: "Standard Use Cases",
                collapsed: true, 
                items: [
                    { text: "Introduction", link: "/docs/use-cases/introduction" },
                    { text: "Download Assets", link: "/docs/use-cases/download" },
                    { text: "Compute Assets", link: "/docs/use-cases/compute" },
                    { text: "Publish Assets", link: "/docs/use-cases/publish" }
                ],
            },
            { text: "Migration",
                collapsed: true, 
                items: [
                    { text: "Overview", link: "/docs/migrations/overview" },
                    { text: "Mainnet Migration", link: "/docs/migrations/oasis-mainnet-migration" },
                    { text: "Success Program", link: "/docs/migrations/success" },
                    { text: "FAQ", link: "/docs/migrations/faq" }
                ],
            },
        ],
      },
      {
        text: "8. Developer Resources",
        collapsed: false,
        items: [
            { text: "Develop Algorithms for Compute-to-Data", link: "/docs/getting-started/buildCustomAlgorithmsForPontusX" },
            { text: "Use Pontus-X Libraries",
                collapsed: true, 
                items: [
                    { text: "Nautilus", link: "https://nautilus.delta-dao.com/" },
                    { text: "Pontus-X CLI", link: "" }
                ],
            },
            { text: "Pontus-X Networks",
                collapsed: true, 
                items: [
                    { text: "Quick Start", link: "/docs/pontus-x-networks/quick-start" },
                    { text: "Validator Node Setup", link: "/docs/pontus-x-networks/node-setup" },
                    { text: "Test Network", link: "/docs/pontus-x-networks/testnet" },
                    { text: "Dev Network", link: "/docs/pontus-x-networks/devnet" }
                ],
            },
        ],
      },
    {
      text: "9. Technical Reference",
      collapsed: true,
      items: [
        { text: "Technical Overview", link: "/docs/technical-architecture/architecture-overview" },
        {
          text: "Core Components",
          items: [
            { text: "Market & Portals", link: "/docs/technical-architecture/portals" },
            { text: "Access Controller", link: "/docs/technical-architecture/access-controller"},
            { text: "Service Catalogue - Metadata Cache (Aquarius)", link: "/docs/technical-architecture/aquarius" },
            { text: "Subgraph - Transaction Cache", link: "/docs/technical-architecture/subgraph" },
            { text: "Distributed Ledger", link: ""},
            { text: "Smart Contracts", link: ""},
          ],
        },
        {
          text: "Asset Metadata Standard (DDO)",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/docs/ddo_credential/ddo_intro",
              items: [
                { text: "W3C VCs & VPs",  link: "/docs/ddo_credential/w3c_credentials" },
                { text: "On-Chain Metadata", link: "/docs/ddo_credential/on_chain", },
              ],
            },
            {
              text: "Verifiable Presentation (DDO Schema)",
              link: "/docs/ddo_credential/ddo_schema",
              items: [
                {
                  text: "Metadata",
                  link: "/docs/ddo_credential/metadata",
                  items: [
                    {
                      text: "Algorithm Metadata",
                      link: "/docs/ddo_credential/algorithm_metadata",
                      items: [
                        { text: "Container", link: "/docs/ddo_credential/container" },
                        { text: "Algorithm Consumer Parameters", link: "/docs/ddo_credential/algorithm_consumer_parameters" },
                      ],
                    },
                  ],
                },

                {
                  text: "Service",
                  link: "/docs/ddo_credential/service",
                  items: [
                    { text: "Files Object", link: "/docs/ddo_credential/files_object" },
                    { text: "Compute Object", link: "/docs/ddo_credential/compute_object" },
                    { text: "Service Consumer Parameters", link: "/docs/ddo_credential/service_consumer_parameters" },
                  ],
                },
                { text: "Credentials (Access Control)", link: "/docs/ddo_credential/credentials" },
                { text: "License Object", link: "/docs/ddo_credential/license_object",
                  items: [
                    {  link: "/docs/ddo_credential/odrl_object" },
                  ],
                },
                { text: "Consumer Parameters", link: "/docs/ddo_credential/consumer_parameters" },
                { text: "Language and Base Direction (i18n)", link: "/docs/ddo_credential/language_i18n" },
                { text: "Lifecycle States", link: "/docs/ddo_credential/lifecycle_states" },
                { text: "Remote Object", link: "/docs/ddo_credential/remote_object" },
                { text: "Complete Overview (Schema)", link: "/docs/ddo_credential/complete_overview" },
                { text: "Changelog", link: "/docs/ddo_credential/changelog" },
              ],
            },
          ],
        },
        { text: "API and Integration Reference", link: "" },
        { text: "Repositories", link: "" }
      ],
    },
    {
        text: "10. Going Live",
        items: [
          { text: "Overview", link: "" },
          { text: "Mainnet Migration", link: "" },
          { text: "Scaling and Best Practices", link: "" },
          { text: "Monitoring and Operations", link: "" },
          { text: "FAQ", link: "" }
        ],
    },
    {
        text: "11. External Resources & Roadmap",
        items: [
          { text: "Research Papers & Whitepapers", link: "" },
          { text: "Future Outlook", link: "" }
        ],
    },  
    {
      text: "Legal",
      items: [
        { text: "Privacy", link: "/privacy" },
        { text: "Imprint", link: "https://delta-dao.com/imprint" },
      ],
    },
  ],
} as const satisfies Sidebar;

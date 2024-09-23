import type { Sidebar } from "vocs";

export const sidebar = {
  "/docs/": [
    {
      text: "Introduction",
      items: [
        { text: "Overview", link: "/docs/introduction/overview" },
        {
          text: "Vision, Mission and Values",
          link: "/docs/introduction/vision-mission-values",
        },
        {
          text: "Gaia-X Data Space",
          link: "/docs/introduction/gaia-x-commitment",
        },
        {
          text: "Pontus-X Network",
          link: "/docs/introduction/network",
        },
      ],
    },
    {
      text: "Getting Started",
      collapsed: false,
      items: [
        { text: "Quick Start", link: "/docs/getting-started/quick-start" },
        {
          text: "Introduction",
          link: "/docs/getting-started/introduction",
        },
        {
          text: "Wallet Setup",
          link: "/docs/getting-started/wallet-setup",
        },
        {
          text: "Pontus-X Ecosystem",
          link: "/docs/getting-started/pontus-x-ecosystem",
        },
        {
          text: "Core Concepts",
          link: "/docs/getting-started/core-concepts",
        },
      ],
    },
    {
      text: "Ecosystem Tutorial",
      collapsed: true,
      items: [
        {
          text: "Lesson 1: Introduction to Pontus-X Ecosystem",
          link: "/docs/tutorial/introduction",
        },
        {
          text: "Lesson 2: Learn Nautilus",
          link: "/docs/tutorial/nautilus",
        },
        {
          text: "Lesson 3: Monetizing Your Data and AI Products ",
          link: "/docs/tutorial/monetization",
        },
        {
          text: "Lesson 4: Collaboration Across Industries",
          link: "/docs/tutorial/collaboration",
        },
        {
          text: "Lesson 5: Ensuring Privacy and Compliance",
          link: "/docs/tutorial/compliance",
        },
      ],
    },
    {
      text: "Participants & Federators",
      collapsed: true,
      items: [
        {
          text: "Federators",
          link: "/docs/participants-and-federators/federators",
        },
        {
          text: "Participants",
          link: "/docs/participants-and-federators/ecosystem-participants",
        },
        {
          text: "Onboarding",
          link: "/docs/participants-and-federators/onboarding",
        },
      ],
    },
    {
      text: "Pontus-X Networks",
      collapsed: true,
      items: [
        { text: "Quick Start", link: "/docs/pontus-x-networks/quick-start" },
        {
          text: "Validator Node Setup",
          link: "/docs/pontus-x-networks/node-setup",
        },
        {
          text: "Testnet",
          link: "/docs/pontus-x-networks/testnet",
        },
        {
          text: "Devnet",
          link: "/docs/pontus-x-networks/devnet",
        },
      ],
    },
    {
      text: "Technical Architecture",
      collapsed: true,
      items: [
        {
          text: "Overview",
          link: "/docs/technical-architecture/architecture-overview",
        },
        {
          text: "Core Components",
          items: [
            {
              text: "Access Controller",
              link: "/docs/technical-architecture/access-controller",
            },
            {
              text: "Service Catalogue - Metadata Cache (Aquarius)",
              link: "/docs/technical-architecture/aquarius",
            },
            {
              text: "Portals",
              link: "/docs/technical-architecture/portals",
            },
            {
              text: "Subgraph - Transaction Cache",
              link: "/docs/technical-architecture/subgraph",
            },
          ],
        },
        {
          text: "DRAFT: Asset Metadata Standard (DDO)",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/docs/ddo_credential/ddo_intro",
              items: [
                {
                  text: "W3C VCs & VPs",
                  link: "/docs/ddo_credential/w3c_credentials",
                },
                {
                  text: "On-Chain Metadata",
                  link: "/docs/ddo_credential/on_chain",
                },
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
                        {
                          text: "Container",
                          link: "/docs/ddo_credential/container",
                        },
                        {
                          text: "Algorithm Consumer Parameters",
                          link: "/docs/ddo_credential/algorithm_consumer_parameters",
                        },
                      ],
                    },
                  ],
                },

                {
                  text: "Service",
                  link: "/docs/ddo_credential/service",
                  items: [
                    {
                      text: "Files Object",
                      link: "/docs/ddo_credential/files_object",
                    },
                    {
                      text: "Compute Object",
                      link: "/docs/ddo_credential/compute_object",
                    },
                    {
                      text: "Service Consumer Parameters",
                      link: "/docs/ddo_credential/service_consumer_parameters",
                    },
                  ],
                },
                {
                  text: "Credentials (Access Control)",
                  link: "/docs/ddo_credential/credentials",
                },
                {
                  text: "License Object",
                  link: "/docs/ddo_credential/license_object",
                  items: [
                    {
                      text: "ODRL Object",
                      link: "/docs/ddo_credential/odrl_object",
                    },
                  ],
                },
                {
                  text: "Consumer Parameters",
                  link: "/docs/ddo_credential/consumer_parameters",
                },
                {
                  text: "Language and Base Direction (i18n)",
                  link: "/docs/ddo_credential/language_i18n",
                },
                {
                  text: "Lifecycle States",
                  link: "/docs/ddo_credential/lifecycle_states",
                },
                {
                  text: "Remote Object",
                  link: "/docs/ddo_credential/remote_object",
                },
                {
                  text: "Complete Overview (Schema)",
                  link: "/docs/ddo_credential/complete_overview",
                },
                {
                  text: "Changelog",
                  link: "/docs/ddo_credential/changelog",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "Use Cases",
      collapsed: true,
      items: [
        { text: "Introduction", link: "/docs/use-cases/introduction" },
        { text: "Migration Guide", link: "/docs/use-cases/migration-guide" },
        { text: "Download Assets", link: "/docs/use-cases/download" },
        { text: "Compute Assets", link: "/docs/use-cases/compute" },
        { text: "Publish Assets", link: "/docs/use-cases/publish" },
      ],
    },
    {
      text: "Contribution",
      collapsed: true,
      items: [
        {
          text: "How to contribute",
          link: "/docs/contribute/overview",
        },
        {
          text: "Repositories",
          link: "/docs/contribute/repositories",
        },
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

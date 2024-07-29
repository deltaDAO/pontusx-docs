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
        // { text: 'FAQ', link: '/docs/faq' }
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
          ],
        },
      ],
    },
    {
      text: "Use Cases",
      collapsed: true,
      items: [
        { text: "Migration Guide", link: "/docs/use-cases/migration-guide" },
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
      collapsed: true,
      items: [
        { text: "Privacy", link: "https://docs.pontus-x.eu/privacy" },
        { text: "Imprint", link: "https://delta-dao.com/imprint" },
      ],
    },
  ],
} as const satisfies Sidebar;

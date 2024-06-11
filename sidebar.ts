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
        // { text: 'FAQ', link: '/docs/faq' }
      ],
    },
    {
      text: "Pontus-X Networks",
      items: [
        { text: "Quick Start", link: "/docs/pontus-x-networks/quick-start" },
        // { text: 'FAQ', link: '/docs/faq' }
      ],
    },

    {
      text: "Legal",
      items: [
        { text: "Privacy", link: "https://docs.pontus-x.eu/privacy" },
        { text: "Imprint", link: "https://delta-dao.com/imprint" },
      ],
    },
  ],
} as const satisfies Sidebar;

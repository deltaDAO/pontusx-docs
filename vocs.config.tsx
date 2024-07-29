import * as React from "react";
import { defineConfig } from "vocs";
import pkg from "./package.json";
import { sidebar } from "./sidebar";

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
function toPatchVersionRange(version: string) {
  const [major, minor] = version.split(".").slice(0, 2);
  return `${major}.${minor}.x`;
}

export default defineConfig({
  baseUrl: "https://pontusx-docs.vercel.app",
  title: "Pontus-X Docs",
  titleTemplate: "%s · Pontus-X Docs",
  description:
    "The official documentation for Pontus-X, a decentralized data and ai ecosystem.",
  head: (
    <>
      {/* <script
        src="https://cdn.usefathom.com/script.js"
        defer
      /> */}
      <script src="https://buttons.github.io/buttons.js" async defer />
    </>
  ),
  ogImageUrl: {
    "/": "/og-image.png",
    "/docs":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
    "/op-stack":
      "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  },
  iconUrl: { light: "/favicons/icon.png", dark: "/favicons/icon.png" },
  logoUrl: { light: "/icon-light.png", dark: "/icon-dark.png" },
  rootDir: ".",
  sidebar,
  socials: [
    {
      icon: "github",
      link: "https://github.com/deltaDAO/pontusx-docs",
    },
  ],
  theme: {
    accentColor: {
      light: "#004967",
      dark: "#00a19e",
    },
  },
  topNav: [
    { text: "Docs", link: "/docs/getting-started", match: "/docs" },
    {
      text: pkg.version,
      items: [
        {
          text: "Contributing",
          link: "https://github.com/deltaDAO/pontusx-docs/blob/main/.github/CONTRIBUTING.md",
        },
      ],
    },
  ],
});

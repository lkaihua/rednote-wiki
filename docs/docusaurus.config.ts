import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'rednote wiki',
  tagline: 'Learn to use rednote, connect with the community, and embrace the culture.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rednotewiki.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-X358VQR97X',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/redwiki-social-card.jpg',
    navbar: {
      title: 'rednote wiki',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Articles',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/lkaihua/rednote-wiki',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'docs',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        {
          title: 'Links',
          items: [
            {
              label: 'iOS - App Store',
              href: 'https://apps.apple.com/us/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6/id741292507',
            },
            {
              label: 'Android - Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.xingin.xhs&hl=en_GB&pli=1',
            },
            {
              label: 'macOS - App Store',
              href: 'https://apps.apple.com/us/app/%E5%B0%8F%E7%BA%A2%E4%B9%A6/id741292507',
            },
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'X',
            //   href: 'https://x.com/docusaurus',
            // },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     // {
        //     //   label: 'Blog',
        //     //   to: '/blog',
        //     // },
        //     // {
        //     //   label: 'GitHub',
        //     //   href: 'https://github.com/facebook/docusaurus',
        //     // },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} rednotewiki.org . Built with ❤️.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

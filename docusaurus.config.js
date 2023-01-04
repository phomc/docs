// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const envMode = process.env.NODE_ENV || "development"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PhoMC',
  tagline: 'PhoMC Documentation',
  url: envMode === 'development' ? 'http://localhost:3000' : 'https://docs.phomc.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'phomc',
  projectName: 'phomc-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Default documentation instance
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/phomc/docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: { alt: 'PhoMC', src: 'img/logo.svg'},
        items: [
          {
            type: 'doc',
            docId: 'tensai/intro',
            position: 'left',
            label: 'Tensai',
          },
          {
            href: 'https://github.com/phomc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: '#' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'GitHub', href: 'https://github.com/phomc' },
              { label: 'PhoMC', href: 'https://phomc.dev' },
            ],
          },
          {
            title: 'Discover',
            items: [],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PhoMC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

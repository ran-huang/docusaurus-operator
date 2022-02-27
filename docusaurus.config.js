// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TiDB in Kubernetes Docs',
  tagline: 'SQL at Scale',
  url: 'https://ran-huang.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ran-huang', // Usually your GitHub org/user name.
  projectName: 'docusaurus-operator', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'TiDB in Kubernetes',
        logo: {
          alt: 'My Site Logo',
          src: 'img/tidb-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'architecture',
            position: 'left',
            label: 'Reference',
          },
          {
            href: 'https://github.com/ran-huang/docs-tidb-operator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'User Manual',
                to: '/',
              },
              {
                  label: 'Reference',
                  to: '/architecture',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/tidb',
              },
              {
                label: 'tidb.io',
                href: 'https://tidb.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/pingcap',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Source Code',
                href: 'https://github.com/pingcap/tidb-operator',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TiDB in Kubernetes Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

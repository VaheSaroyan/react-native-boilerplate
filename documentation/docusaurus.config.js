/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'React Native Boilerplate',
  tagline: 'Ready to use react native architecture based on Separation of Concerns.',
  url: 'https://vahesaroyan.github.io',
  baseUrl: '/react-native-boilerplate/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'VaheSaroyan',
  projectName: 'react-native-boilerplate',
  themeConfig: {
    algolia: {
      apiKey: '582006d3272cb38b4ffeba71e5292c7d',
      indexName: 'rnboilerplate',
      contextualSearch: true,
    },
    navbar: {
      title: 'RNBoilerplate',
      logo: {
        alt: 'React Native Boilerplate',
        src: 'img/logo_transparent.png',
      },
      items: [
        {
          to: 'docs/Introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/VaheSaroyan/react-native-boilerplate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} VS, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/vahesaroyan/react-native-boilerplate/edit/master/website-documentation/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

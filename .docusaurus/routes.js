import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tp3_adc/__docusaurus/debug',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug', 'bee'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/config',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/config', 'fbc'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/content',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/content', '3ef'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/globalData',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/globalData', '19b'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/metadata',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/metadata', '50f'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/registry',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/registry', '85e'),
    exact: true
  },
  {
    path: '/tp3_adc/__docusaurus/debug/routes',
    component: ComponentCreator('/tp3_adc/__docusaurus/debug/routes', 'c71'),
    exact: true
  },
  {
    path: '/tp3_adc/aboutUs',
    component: ComponentCreator('/tp3_adc/aboutUs', '4bc'),
    exact: true
  },
  {
    path: '/tp3_adc/blog',
    component: ComponentCreator('/tp3_adc/blog', 'ea4'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/archive',
    component: ComponentCreator('/tp3_adc/blog/archive', 'cd9'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/first-blog-post',
    component: ComponentCreator('/tp3_adc/blog/first-blog-post', 'a66'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/long-blog-post',
    component: ComponentCreator('/tp3_adc/blog/long-blog-post', '5c4'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/mdx-blog-post',
    component: ComponentCreator('/tp3_adc/blog/mdx-blog-post', '050'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/tags',
    component: ComponentCreator('/tp3_adc/blog/tags', '69d'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/tags/docusaurus',
    component: ComponentCreator('/tp3_adc/blog/tags/docusaurus', 'bee'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/tags/facebook',
    component: ComponentCreator('/tp3_adc/blog/tags/facebook', '9c9'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/tags/hello',
    component: ComponentCreator('/tp3_adc/blog/tags/hello', '951'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/tags/hola',
    component: ComponentCreator('/tp3_adc/blog/tags/hola', 'f51'),
    exact: true
  },
  {
    path: '/tp3_adc/blog/welcome',
    component: ComponentCreator('/tp3_adc/blog/welcome', 'ca0'),
    exact: true
  },
  {
    path: '/tp3_adc/livraria',
    component: ComponentCreator('/tp3_adc/livraria', 'eb6'),
    exact: true
  },
  {
    path: '/tp3_adc/markdown-page',
    component: ComponentCreator('/tp3_adc/markdown-page', 'fc6'),
    exact: true
  },
  {
    path: '/tp3_adc/docs',
    component: ComponentCreator('/tp3_adc/docs', '341'),
    routes: [
      {
        path: '/tp3_adc/docs/category/classes',
        component: ComponentCreator('/tp3_adc/docs/category/classes', '2d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tp3_adc/docs/Documentacao/Funcionarios',
        component: ComponentCreator('/tp3_adc/docs/Documentacao/Funcionarios', '171'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tp3_adc/docs/Documentacao/Leitores',
        component: ComponentCreator('/tp3_adc/docs/Documentacao/Leitores', 'fad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tp3_adc/docs/Documentacao/Livros',
        component: ComponentCreator('/tp3_adc/docs/Documentacao/Livros', '65d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tp3_adc/docs/Documentacao/Manutencao',
        component: ComponentCreator('/tp3_adc/docs/Documentacao/Manutencao', 'e03'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tp3_adc/docs/Documentacao/Requisicoes',
        component: ComponentCreator('/tp3_adc/docs/Documentacao/Requisicoes', '0a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/tp3_adc/',
    component: ComponentCreator('/tp3_adc/', 'a79'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

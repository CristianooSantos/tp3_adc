"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[7851],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>f});var r=o(7294);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,r,i=function(e,a){if(null==e)return{};var o,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=r.createContext({}),u=function(e){var a=r.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},c=function(e){var a=u(e.components);return r.createElement(d.Provider,{value:a},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var o=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=u(o),p=i,f=m["".concat(d,".").concat(p)]||m[p]||l[p]||s;return o?r.createElement(f,t(t({ref:a},c),{},{components:o})):r.createElement(f,t({ref:a},c))}));function f(e,a){var o=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=o.length,t=new Array(s);t[0]=p;var n={};for(var d in a)hasOwnProperty.call(a,d)&&(n[d]=a[d]);n.originalType=e,n[m]="string"==typeof e?e:i,t[1]=n;for(var u=2;u<s;u++)t[u]=o[u];return r.createElement.apply(null,t)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4540:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>s,metadata:()=>n,toc:()=>u});var r=o(7462),i=(o(7294),o(3905));const s={sidebar_position:5},t="Manuten\xe7\xe3o do Sistema",n={unversionedId:"tutorial-basics/Manutencao",id:"tutorial-basics/Manutencao",title:"Manuten\xe7\xe3o do Sistema",description:"A manuten\xe7\xe3o do sistema \xe9 crucial para garantir que a biblioteca funcione de maneira eficiente e que os dados estejam sempre protegidos e acess\xedveis. Aqui est\xe3o algumas das principais funcionalidades de manuten\xe7\xe3o do sistema:",source:"@site/docs/tutorial-basics/Manutencao.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Manutencao",permalink:"/tp3_adc/docs/tutorial-basics/Manutencao",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Manutencao.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Requisicoes",permalink:"/tp3_adc/docs/tutorial-basics/Requisicoes"},next:{title:"Leitores",permalink:"/tp3_adc/docs/tutorial-basics/Leitores"}},d={},u=[{value:"Funcionalidades",id:"funcionalidades",level:2},{value:"Realizar backups peri\xf3dicos dos dados da biblioteca",id:"realizar-backups-peri\xf3dicos-dos-dados-da-biblioteca",level:3},{value:"Restaurar dados a partir de backups",id:"restaurar-dados-a-partir-de-backups",level:3},{value:"Monitorar e otimizar o desempenho do sistema",id:"monitorar-e-otimizar-o-desempenho-do-sistema",level:3},{value:"Notificar sobre livros extraviados ou inconsist\xeancias",id:"notificar-sobre-livros-extraviados-ou-inconsist\xeancias",level:3},{value:"Garantir que o sistema funcione de maneira eficiente",id:"garantir-que-o-sistema-funcione-de-maneira-eficiente",level:3},{value:"Exemplo de Utiliza\xe7\xe3o",id:"exemplo-de-utiliza\xe7\xe3o",level:2},{value:"Criando um novo empr\xe9stimo",id:"criando-um-novo-empr\xe9stimo",level:3},{value:"Listando todos os empr\xe9stimos",id:"listando-todos-os-empr\xe9stimos",level:3},{value:"Salvando os empr\xe9stimos num ficheiro",id:"salvando-os-empr\xe9stimos-num-ficheiro",level:3},{value:"Carregando os empr\xe9stimos de um ficheiro",id:"carregando-os-empr\xe9stimos-de-um-ficheiro",level:3}],c={toc:u},m="wrapper";function l(e){let{components:a,...o}=e;return(0,i.kt)(m,(0,r.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manuten\xe7\xe3o-do-sistema"},"Manuten\xe7\xe3o do Sistema"),(0,i.kt)("p",null,"A manuten\xe7\xe3o do sistema \xe9 crucial para garantir que a biblioteca funcione de maneira eficiente e que os dados estejam sempre protegidos e acess\xedveis. Aqui est\xe3o algumas das principais funcionalidades de manuten\xe7\xe3o do sistema:"),(0,i.kt)("h2",{id:"funcionalidades"},"Funcionalidades"),(0,i.kt)("h3",{id:"realizar-backups-peri\xf3dicos-dos-dados-da-biblioteca"},"Realizar backups peri\xf3dicos dos dados da biblioteca"),(0,i.kt)("p",null,"A realiza\xe7\xe3o de backups peri\xf3dicos garante que todas as informa\xe7\xf5es dos livros, leitores, funcion\xe1rios e empr\xe9stimos estejam protegidas contra perdas acidentais. Estes backups podem ser armazenados em locais seguros, como servidores externos ou servi\xe7os de armazenamento em nuvem, para garantir a recupera\xe7\xe3o dos dados em caso de falhas no sistema."),(0,i.kt)("h3",{id:"restaurar-dados-a-partir-de-backups"},"Restaurar dados a partir de backups"),(0,i.kt)("p",null,"Em caso de perda de dados, corrup\xe7\xe3o de arquivos ou qualquer outro problema que comprometa a integridade dos dados, a funcionalidade de restaura\xe7\xe3o permite recuperar as informa\xe7\xf5es a partir dos backups realizados. Isso garante a continuidade das opera\xe7\xf5es da biblioteca sem grandes interrup\xe7\xf5es."),(0,i.kt)("h3",{id:"monitorar-e-otimizar-o-desempenho-do-sistema"},"Monitorar e otimizar o desempenho do sistema"),(0,i.kt)("p",null,"O monitoramento cont\xednuo do sistema \xe9 essencial para identificar e solucionar problemas de desempenho. Ferramentas de monitoramento podem ser utilizadas para acompanhar o uso da CPU, mem\xf3ria, e armazenamento, al\xe9m de detectar poss\xedveis gargalos. A otimiza\xe7\xe3o pode incluir ajustes na configura\xe7\xe3o do sistema, atualiza\xe7\xf5es de hardware ou melhorias no software."),(0,i.kt)("h3",{id:"notificar-sobre-livros-extraviados-ou-inconsist\xeancias"},"Notificar sobre livros extraviados ou inconsist\xeancias"),(0,i.kt)("p",null,"O sistema deve ser capaz de identificar e notificar sobre livros que est\xe3o fora do lugar, n\xe3o devolvidos no prazo ou quaisquer outras inconsist\xeancias nos registros. Isso ajuda a manter a acuracidade das informa\xe7\xf5es e garante que os livros estejam sempre dispon\xedveis para os leitores."),(0,i.kt)("h3",{id:"garantir-que-o-sistema-funcione-de-maneira-eficiente"},"Garantir que o sistema funcione de maneira eficiente"),(0,i.kt)("p",null,"Manter o sistema funcionando de maneira eficiente envolve a implementa\xe7\xe3o de boas pr\xe1ticas de gest\xe3o de TI, como a atualiza\xe7\xe3o regular do software, manuten\xe7\xe3o preventiva do hardware e a implementa\xe7\xe3o de medidas de seguran\xe7a para proteger contra amea\xe7as cibern\xe9ticas. Isso assegura que a biblioteca opere sem interrup\xe7\xf5es e que as informa\xe7\xf5es estejam sempre seguras."),(0,i.kt)("h2",{id:"exemplo-de-utiliza\xe7\xe3o"},"Exemplo de Utiliza\xe7\xe3o"),(0,i.kt)("h3",{id:"criando-um-novo-empr\xe9stimo"},"Criando um novo empr\xe9stimo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'emprestimo = Emprestimo("978-3-16-148410-0", "12345", "98765")\nemprestimo.salvar()\n')),(0,i.kt)("h3",{id:"listando-todos-os-empr\xe9stimos"},"Listando todos os empr\xe9stimos"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Emprestimo.listar_todos()\n")),(0,i.kt)("h3",{id:"salvando-os-empr\xe9stimos-num-ficheiro"},"Salvando os empr\xe9stimos num ficheiro"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Emprestimo.salvar_em_arquivo("emprestimos.dat")\n')),(0,i.kt)("h3",{id:"carregando-os-empr\xe9stimos-de-um-ficheiro"},"Carregando os empr\xe9stimos de um ficheiro"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Emprestimo.carregar_de_arquivo("emprestimos.dat")\n')))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[5521],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>k});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(o),c=a,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||i;return o?r.createElement(k,n(n({ref:t},l),{},{components:o})):r.createElement(k,n({ref:t},l))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[d]="string"==typeof e?e:a,n[1]=s;for(var p=2;p<i;p++)n[p]=o[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6358:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=o(7462),a=(o(7294),o(3905));const i={sidebar_position:4},n=void 0,s={unversionedId:"tutorial-basics/Requisicoes",id:"tutorial-basics/Requisicoes",title:"Requisicoes",description:"Requisi\xe7\xf5es",source:"@site/docs/tutorial-basics/Requisicoes.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Requisicoes",permalink:"/tp3_adc/docs/tutorial-basics/Requisicoes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/Requisicoes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Funcion\xe1rios",permalink:"/tp3_adc/docs/tutorial-basics/Funcionarios"},next:{title:"Manuten\xe7\xe3o do Sistema",permalink:"/tp3_adc/docs/tutorial-basics/Manutencao"}},m={},p=[{value:"Requisi\xe7\xf5es",id:"requisi\xe7\xf5es",level:3},{value:"Atributos Principais:",id:"atributos-principais",level:4},{value:"M\xe9todos Principais:",id:"m\xe9todos-principais",level:4},{value:"Descri\xe7\xe3o Detalhada dos M\xe9todos",id:"descri\xe7\xe3o-detalhada-dos-m\xe9todos",level:4},{value:"Exemplo de Utiliza\xe7\xe3o",id:"exemplo-de-utiliza\xe7\xe3o",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"requisi\xe7\xf5es"},"Requisi\xe7\xf5es"),(0,a.kt)("p",null,"A classe ",(0,a.kt)("inlineCode",{parentName:"p"},"Emprestimo")," gere os empr\xe9stimos de livros, permitindo que registe, consulte, atualize e exclua informa\xe7\xf5es relacionadas com os empr\xe9stimos, al\xe9m de possibilitar salvar e carregar os dados a partir de ficheiros bin\xe1rios."),(0,a.kt)("h4",{id:"atributos-principais"},"Atributos Principais:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"emprestimos")),": Dicion\xe1rio que armazena todos os empr\xe9stimos registados, com IDs \xfanicos como chave."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"contador_emprestimos")),": Contador sequencial que gera IDs \xfanicos para os empr\xe9stimos."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"isbn_livro")),": ISBN do livro emprestado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"numero_leitor")),": N\xfamero identificador do leitor que realizou o empr\xe9stimo."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"id_funcionario")),": Identificador do funcion\xe1rio respons\xe1vel pelo empr\xe9stimo."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"data_emprestimo")),": Data em que o empr\xe9stimo foi realizado."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"data_devolucao")),": Data prevista para devolu\xe7\xe3o do livro.")),(0,a.kt)("h4",{id:"m\xe9todos-principais"},"M\xe9todos Principais:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\\_\\_init\\_\\_(self, isbn_livro, numero_leitor, id_funcionario, data_emprestimo=None, data_devolucao=None)")),":\nInicializa um novo objeto Emprestimo, atribuindo um ID \xfanico e definindo as informa\xe7\xf5es sobre o empr\xe9stimo.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"salvar(self)")),":\nSalva o empr\xe9stimo atual no dicion\xe1rio emprestimos.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"obter(id_emprestimo)")),":\nObt\xe9m os dados de um empr\xe9stimo pelo seu ID. Retorna o objeto do empr\xe9stimo ou None se n\xe3o encontrado.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"deletar(id_emprestimo)")),":\nRemove um empr\xe9stimo do sistema pelo ID fornecido.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"listar_todos()")),":\nLista todos os empr\xe9stimos registados no sistema, exibindo informa\xe7\xf5es detalhadas sobre cada um deles.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"salvar_em_arquivo(arquivo)")),":\nSalva todos os empr\xe9stimos num ficheiro bin\xe1rio, permitindo armazenamento persistente.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"carregar_de_arquivo(arquivo)")),":\nCarrega empr\xe9stimos de um ficheiro bin\xe1rio previamente salvo, restaurando os dados no sistema."))),(0,a.kt)("h4",{id:"descri\xe7\xe3o-detalhada-dos-m\xe9todos"},"Descri\xe7\xe3o Detalhada dos M\xe9todos"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"\\_\\_init\\_\\_")),":\nEste m\xe9todo construtor inicializa um novo empr\xe9stimo, recebendo como par\xe2metros o ISBN do livro, o n\xfamero do leitor, o ID do funcion\xe1rio e, opcionalmente, as datas do empr\xe9stimo e devolu\xe7\xe3o.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"salvar()")),":\nAdiciona o empr\xe9stimo ao dicion\xe1rio emprestimos, usando um ID \xfanico, e exibe uma mensagem de sucesso.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"obter(id_emprestimo)")),":\nPermite recuperar os detalhes de um empr\xe9stimo espec\xedfico pelo ID. Retorna o empr\xe9stimo correspondente ou None se o ID n\xe3o for encontrado.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"deletar(id_emprestimo)")),":\nExclui um empr\xe9stimo do dicion\xe1rio emprestimos pelo ID. Se o ID n\xe3o for encontrado, exibe uma mensagem de erro.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"listar_todos()")),":\nExibe uma lista completa de todos os empr\xe9stimos registados no sistema, incluindo informa\xe7\xf5es como o ISBN do livro, o n\xfamero do leitor e as datas do empr\xe9stimo e devolu\xe7\xe3o.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"salvar_em_arquivo(arquivo)")),":\nGrava todos os empr\xe9stimos atuais num ficheiro bin\xe1rio. Isto permite armazenar os dados para utiliza\xe7\xe3o posterior.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"carregar_de_arquivo(arquivo)")),":\nL\xea e carrega os dados dos empr\xe9stimos a partir de um ficheiro bin\xe1rio. Se o ficheiro n\xe3o existir, exibe uma mensagem de erro."))),(0,a.kt)("h3",{id:"exemplo-de-utiliza\xe7\xe3o"},"Exemplo de Utiliza\xe7\xe3o"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Criando um novo empr\xe9stimo")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'emprestimo = Emprestimo("978-3-16-148410-0", "12345", "98765")\nemprestimo.salvar()\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Listando todos os empr\xe9stimos")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Emprestimo.listar_todos()\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Salvando os empr\xe9stimos num ficheiro")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Emprestimo.salvar_em_arquivo("emprestimos.dat")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Carregando os empr\xe9stimos de um ficheiro")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Emprestimo.carregar_de_arquivo("emprestimos.dat")\n')))}u.isMDXComponent=!0}}]);
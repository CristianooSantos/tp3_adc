"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[460],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(k,n(n({ref:t},d),{},{components:a})):r.createElement(k,n({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const i={sidebar_position:2},n="Livro",l={unversionedId:"Documentacao/Livros",id:"Documentacao/Livros",title:"Livro",description:"A classe Livro gere os livros da biblioteca, permitindo que registe, consulte, atualize e exclua informa\xe7\xf5es sobre os livros, al\xe9m de possibilitar verificar a disponibilidade de cada um.",source:"@site/docs/Documentacao/Livros.md",sourceDirName:"Documentacao",slug:"/Documentacao/Livros",permalink:"/tp3_adc/docs/Documentacao/Livros",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Documentacao/Livros.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Classes",permalink:"/tp3_adc/docs/category/classes"},next:{title:"Funcion\xe1rios",permalink:"/tp3_adc/docs/Documentacao/Funcionarios"}},s={},p=[{value:"<strong>Atributos Principais</strong>",id:"atributos-principais",level:2},{value:"<strong>M\xe9todos Principais</strong>",id:"m\xe9todos-principais",level:2},{value:"<strong>Descri\xe7\xe3o Detalhada dos M\xe9todos</strong>",id:"descri\xe7\xe3o-detalhada-dos-m\xe9todos",level:2},{value:"<strong>Exemplo de Utiliza\xe7\xe3o</strong>",id:"exemplo-de-utiliza\xe7\xe3o",level:2},{value:"Criando um novo livro",id:"criando-um-novo-livro",level:3}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"livro"},"Livro"),(0,o.kt)("p",null,"A classe ",(0,o.kt)("inlineCode",{parentName:"p"},"Livro")," gere os livros da biblioteca, permitindo que registe, consulte, atualize e exclua informa\xe7\xf5es sobre os livros, al\xe9m de possibilitar verificar a disponibilidade de cada um."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"atributos-principais"},(0,o.kt)("strong",{parentName:"h2"},"Atributos Principais")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isbn"),": ISBN do livro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"titulo"),": T\xedtulo do livro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"autor"),": Autor do livro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"categoria"),": Categoria do livro."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disponibilidade"),": Indica se o livro est\xe1 dispon\xedvel ou emprestado.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"m\xe9todos-principais"},(0,o.kt)("strong",{parentName:"h2"},"M\xe9todos Principais")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"__init__(self, isbn, titulo, autor, categoria, disponibilidade=True)"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Inicializa um novo objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"Livro"),", atribuindo as informa\xe7\xf5es principais sobre o livro.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"salvar(self)"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Salva o livro no sistema, adicionando-o \xe0 cole\xe7\xe3o de livros.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"atualizar(self)"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Atualiza as informa\xe7\xf5es de um livro j\xe1 existente.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deletar(self)"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Exclui um livro do sistema.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"listar_todos()"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Lista todos os livros registados no sistema, mostrando detalhes como ISBN, t\xedtulo, autor e categoria.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"verificar_disponibilidade(self)"),":",(0,o.kt)("br",{parentName:"p"}),"\n","Verifica se o livro est\xe1 dispon\xedvel para empr\xe9stimo."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"descri\xe7\xe3o-detalhada-dos-m\xe9todos"},(0,o.kt)("strong",{parentName:"h2"},"Descri\xe7\xe3o Detalhada dos M\xe9todos")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"__init__")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Este m\xe9todo construtor inicializa um novo livro, recebendo como par\xe2metros o ISBN, t\xedtulo, autor, categoria e, opcionalmente, a disponibilidade (que por padr\xe3o \xe9 ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", indicando que o livro est\xe1 dispon\xedvel).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"salvar()")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Adiciona o livro ao sistema. O livro \xe9 registado na cole\xe7\xe3o de livros da biblioteca.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"atualizar()")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Atualiza as informa\xe7\xf5es de um livro existente no sistema, como t\xedtulo, autor ou categoria.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"deletar()")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Exclui o livro do sistema. Caso o livro n\xe3o seja encontrado, exibe uma mensagem de erro.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"listar_todos()")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Exibe uma lista completa de todos os livros registados, incluindo informa\xe7\xf5es como ISBN, t\xedtulo, autor e categoria.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"verificar_disponibilidade()")),":",(0,o.kt)("br",{parentName:"p"}),"\n","Verifica se o livro est\xe1 dispon\xedvel para empr\xe9stimo, retornando ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," se estiver dispon\xedvel e ",(0,o.kt)("inlineCode",{parentName:"p"},"False")," caso contr\xe1rio."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"exemplo-de-utiliza\xe7\xe3o"},(0,o.kt)("strong",{parentName:"h2"},"Exemplo de Utiliza\xe7\xe3o")),(0,o.kt)("h3",{id:"criando-um-novo-livro"},"Criando um novo livro"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'livro = Livro("978-3-16-148410-0", "O Hobbit", "J.R.R. Tolkien", "Fantasia")\nlivro.salvar()\n')))}u.isMDXComponent=!0}}]);
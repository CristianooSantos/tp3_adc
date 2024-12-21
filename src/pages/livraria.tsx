import React, { useState } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './livraria.module.css';

function HighlightRow() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.highlightRow)}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="hero__title" style={{ margin: '0 auto' }}>{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{ margin: '0 auto' }}>Bem-vindo à nossa coleção de livros!</p>
      </div>
    </div>
  );
}

function Book({ title, author, description, image, onClick }) {
  return (
    <div
      className={clsx('card', styles.bookCard)}
      style={{
        backgroundColor: '#821694',
        color: '#fff',
        padding: '0.8rem',
        borderRadius: '8px',
        margin: '0.5rem',
        width: '280px',
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget).style.transform = 'scale(1.05) rotateX(10deg) rotateY(10deg)';
        (e.currentTarget).style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget).style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        (e.currentTarget).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
      onClick={onClick}
    >
      <div className="card__image" style={{ width: '100%', height: '75%' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '4px',
          }}
        />
      </div>
      <div className="card__body" style={{ textAlign: 'center', padding: '0.5rem' }}>
        <h3 style={{ margin: '0.5rem 0', fontSize: '1rem' }}>{title}</h3>
        <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Autor:</strong> {author}</p>
      </div>
    </div>
  );
}

function LibraryBooks() {
  const books = [
    {
      title: 'Harry Potter e a Pedra Filosofal',
      author: 'J.K. Rowling',
      description: 'O início da jornada mágica de Harry Potter em Hogwarts.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry1.jpg').default,
    },
    {
      title: 'Harry Potter e a Câmara Secreta',
      author: 'J.K. Rowling',
      description: 'Harry descobre segredos sombrios em Hogwarts.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry2.jpg').default,
    },
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'J.K. Rowling',
      description: 'Uma aventura cheia de mistérios envolvendo Sirius Black.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry3.jpg').default,
    },
    {
      title: 'Harry Potter e o Cálice de Fogo',
      author: 'J.K. Rowling',
      description: 'Harry participa no perigoso Torneio Tribruxo.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry4.jpg').default,
    },
    {
      title: 'Harry Potter e a Ordem da Fênix',
      author: 'J.K. Rowling',
      description: 'A resistência contra Lord Voldemort ganha força.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry5.jpg').default,
    },
    {
      title: 'Harry Potter e o Enigma do Príncipe',
      author: 'J.K. Rowling',
      description: 'Segredos do passado de Voldemort são revelados.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry6.jpg').default,
    },
    {
      title: 'Harry Potter e as Relíquias da Morte',
      author: 'J.K. Rowling',
      description: 'A batalha final entre Harry e Voldemort.',
      genre: 'Fantasia',
      image: require('@site/static/img/harry7.jpg').default,
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'Uma distopia sombria sobre vigilância e controle governamental.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/1984.jpg').default,
    },
    {
      title: 'Orgulho e Preconceito',
      author: 'Jane Austen',
      description: 'Uma história de amor e crítica social na Inglaterra do século XIX.',
      genre: 'Romance',
      image: require('@site/static/img/orgulho_preconceito.jpg').default,
    },
    {
      title: 'Razão e Sensibilidade',
      author: 'Jane Austen',
      description: 'As dificuldades e os contrastes entre duas irmãs em busca de amor e estabilidade.',
      genre: 'Romance',
      image: require('@site/static/img/razao_sensibilidade.jpg').default,
    },
    {
      title: 'Emma',
      author: 'Jane Austen',
      description: 'A vida de uma jovem rica e teimosa que tenta encontrar casamentos para os outros, mas ignora o amor para si mesma.',
      genre: 'Romance',
      image: require('@site/static/img/emma.jpg').default,
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      description: 'A trajetória de uma jovem órfã em busca de amor e liberdade.',
      genre: 'Romance',
      image: require('@site/static/img/jane_eyre.jpg').default,
    },
    {
      title: 'O Morro dos Ventos Uivantes',
      author: 'Emily Brontë',
      description: 'Uma história de amor intensa e vingança nas charnecas inglesas.',
      genre: 'Romance',
      image: require('@site/static/img/morro_ventos_uivantes.jpg').default,
    },
    {
      title: 'Persuasão',
      author: 'Jane Austen',
      description: 'A segunda chance no amor para uma mulher madura e independente.',
      genre: 'Romance',
      image: require('@site/static/img/persuasao.jpg').default,
    },
    {
      title: 'Grandes Esperanças',
      author: 'Charles Dickens',
      description: 'A jornada de um órfão em busca de riqueza e significado na sociedade vitoriana.',
      genre: 'Romance',
      image: require('@site/static/img/grandes_esperancas.jpg').default,
    },
    {
      title: 'Mansfield Park',
      author: 'Jane Austen',
      description: 'A vida de Fanny Price e suas interações em um ambiente social complexo.',
      genre: 'Romance',
      image: require('@site/static/img/mansfield_park.jpg').default,
    },
    {
      title: 'Middlemarch',
      author: 'George Eliot',
      description: 'Um retrato profundo e psicológico da sociedade inglesa do século XIX.',
      genre: 'Romance',
      image: require('@site/static/img/middlemarch.jpg').default,
    },    
    {
      title: 'O Código Da Vinci',
      author: 'Dan Brown',
      description: 'Uma conspiração religiosa que desafia séculos de história.',
      genre: 'Mistério',
      image: require('@site/static/img/codigo_da_vinci.jpg').default,
    },
    {
      title: 'O Senhor dos Anéis: A Sociedade do Anel',
      author: 'J.R.R. Tolkien',
      description: 'A primeira etapa de uma jornada épica para destruir o Um Anel.',
      genre: 'Fantasia',
      image: require('@site/static/img/sociedade_anel.jpg').default,
    },
    {
      title: 'Sapiens: Uma Breve História da Humanidade',
      author: 'Yuval Noah Harari',
      description: 'Uma análise fascinante sobre a evolução e impacto da humanidade.',
      genre: 'História',
      image: require('@site/static/img/sapiens.jpg').default,
    },
    {
      title: 'O Alquimista',
      author: 'Paulo Coelho',
      description: 'A busca de um jovem pastor pelo seu tesouro pessoal.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/o_alquimista.jpg').default,
    },
    {
      title: 'O Mundo de Sofia',
      author: 'Jostein Gaarder',
      description: 'Uma jornada pela história da filosofia através das cartas misteriosas recebidas por uma jovem.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/mundo_sofia.jpg').default,
    },
    {
      title: 'Crime e Castigo',
      author: 'Fiódor Dostoiévski',
      description: 'Um jovem estudante enfrenta as consequências morais e filosóficas de um assassinato.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/crime_castigo.jpg').default,
    },
    {
      title: 'O Estrangeiro',
      author: 'Albert Camus',
      description: 'Um homem se torna indiferente à vida, enquanto explora os limites do absurdo e da existência.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/o_estrangeiro.jpg').default,
    },
    {
      title: 'A Náusea',
      author: 'Jean-Paul Sartre',
      description: 'Um estudo filosófico sobre a liberdade e o vazio existencial através da narrativa de um homem solitário.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/a_nausea.jpg').default,
    },
    {
      title: 'A Insustentável Leveza do Ser',
      author: 'Milan Kundera',
      description: 'Um romance que questiona o peso das escolhas humanas e a busca por significado.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/insustentavel_leveza.jpg').default,
    },
    {
      title: 'O Apanhador no Campo de Centeio',
      author: 'J.D. Salinger',
      description: 'Um jovem enfrenta os desafios da adolescência enquanto questiona a autenticidade da sociedade.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/apanhador_centeio.jpg').default,
    },
    {
      title: 'Zen e a Arte da Manutenção de Motocicletas',
      author: 'Robert M. Pirsig',
      description: 'Uma jornada de autodescoberta que combina filosofia e narrativa sobre a busca pela qualidade.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/zen_manutencao.jpg').default,
    },
    {
      title: 'O Lobo da Estepe',
      author: 'Hermann Hesse',
      description: 'Uma exploração profunda da dualidade humana e da busca por propósito em meio à solidão.',
      genre: 'Ficção Filosófica',
      image: require('@site/static/img/lobo_estepe.jpg').default,
    },
    
    {
      title: 'A Guerra dos Tronos',
      author: 'George R.R. Martin',
      description: 'Intrigas e batalhas numa luta épica pelo Trono de Ferro.',
      genre: 'Fantasia Épica',
      image: require('@site/static/img/guerra_dos_tronos.jpg').default,
    },
    
    {
        title: 'O Império Final',
        author: 'Brandon Sanderson',
        description: 'Num mundo dominado por um império sombrio, um grupo de rebeldes luta contra o Senhor Supremo utilizando magia derivada da ingestão de metais.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/imperio_final.jpg').default,
    },
    {
        title: 'O Nome do Vento',
        author: 'Patrick Rothfuss',
        description: 'A história de Kvothe, um jovem prodígio que se torna uma lenda na arte da magia e da música.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/nome_do_vento.jpg').default,
    },
    {
        title: 'A Roda do Tempo: O Olho do Mundo',
        author: 'Robert Jordan',
        description: 'Uma jornada épica de vários heróis que devem lutar contra as forças das trevas para salvar o mundo.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/olho_do_mundo.jpg').default,
    },
    {
        title: 'As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa',
        author: 'C.S. Lewis',
        description: 'Quatro crianças são transportadas para Nárnia, onde ajudam a combater a Feiticeira Branca e libertar o reino da sua tirania.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/leao_feiticeira.jpg').default,
    },
    {
        title: 'O Ciclo da Herança: Eragon',
        author: 'Christopher Paolini',
        description: 'Eragon, um jovem fazendeiro, encontra um ovo de dragão e se torna o último Cavaleiro de Dragão numa luta pela liberdade.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/eragon.jpg').default,
    },
    {
        title: 'A Canção de Shannara: A Pedra da Lágrima',
        author: 'Terry Brooks',
        description: 'Em um mundo devastado, um herói tem a missão de proteger uma pedra mágica que pode salvar ou destruir o mundo.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/pedra_da_lagrima.jpg').default,
    },
    {
        title: 'O Mago',
        author: 'Raymond E. Feist',
        description: 'A história de um jovem chamado Pug, que se torna aprendiz de mago e se vê envolvido em batalhas interdimensionais.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/o_mago.jpg').default,
    },
    {
        title: 'A Primeira Lei: O Último Argumento dos Reis',
        author: 'Joe Abercrombie',
        description: 'Em um mundo sombrio e brutal, heróis improváveis lutam por poder em uma guerra sangrenta e cheia de traições.',
        genre: 'Fantasia Épica',
        image: require('@site/static/img/ultimo_argumento_dos_reis.jpg').default,
    },
    {
      title: 'Homo Deus: Uma Breve História do Amanhã',
      author: 'Yuval Noah Harari',
      description: 'Explora os futuros potenciais da humanidade com base em tendências tecnológicas e sociais.',
      genre: 'História',
      image: require('@site/static/img/homo_deus.jpg').default,
    },
    {
      title: 'Armas, Germes e Aço',
      author: 'Jared Diamond',
      description: 'Investiga como a geografia e o ambiente influenciaram a história e a evolução das sociedades humanas.',
      genre: 'História',
      image: require('@site/static/img/armas_germes_aco.jpg').default,
    },
    {
      title: 'O Gene: Uma História Íntima',
      author: 'Siddhartha Mukherjee',
      description: 'A história do gene e como ele molda o futuro da humanidade.',
      genre: 'História',
      image: require('@site/static/img/o_gene.jpg').default,
    },
    {
      title: '21 Lições para o Século 21',
      author: 'Yuval Noah Harari',
      description: 'Reflexões sobre os desafios contemporâneos que a humanidade enfrenta.',
      genre: 'História',
      image: require('@site/static/img/21_licoes.jpg').default,
    },
    {
      title: 'O Mundo Assombrado pelos Demônios',
      author: 'Carl Sagan',
      description: 'Uma defesa apaixonada da ciência e do pensamento crítico.',
      genre: 'História',
      image: require('@site/static/img/mundo_assombrado.jpg').default,
    },
    {
      title: 'O Erro de Descartes',
      author: 'António Damásio',
      description: 'Explora como as emoções moldam as decisões e a evolução humana.',
      genre: 'História',
      image: require('@site/static/img/erro_descartes.jpg').default,
    },
    {
      title: 'A Ascensão do Dinheiro',
      author: 'Niall Ferguson',
      description: 'Uma história do papel do dinheiro na evolução da sociedade.',
      genre: 'História',
      image: require('@site/static/img/ascensao_dinheiro.jpg').default,
    },
    {
      title: 'Breve História de Quase Tudo',
      author: 'Bill Bryson',
      description: 'Uma explicação acessível sobre os principais conceitos científicos e históricos.',
      genre: 'História',
      image: require('@site/static/img/breve_historia.jpg').default,
    },        
    {
      title: 'O Processo',
      author: 'Franz Kafka',
      description: 'A luta de um homem contra um sistema judicial misterioso e opressivo.',
      genre: 'Ficção Existencial',
      image: require('@site/static/img/o_processo.jpg').default,
    },
    {
      title: 'O Ser e o Nada',
      author: 'Jean-Paul Sartre',
      description: 'Uma análise filosófica sobre a liberdade humana, o existencialismo e a luta constante pela criação de significado em um mundo sem sentido.',
      genre: 'Ficção Existencial',
      image: require('@site/static/img/o_ser_e_o_nada.jpg').default,
    },
    {
        title: 'Na Estrada',
        author: 'Jack Kerouac',
        description: 'Uma jornada de autodescoberta e busca por liberdade, em um mundo de incertezas e existencialismo, enquanto os personagens enfrentam suas próprias questões existenciais.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/na_estrada.jpg').default,
    },
    {
        title: 'A Morte de Ivan Ilitch',
        author: 'Lev Tolstói',
        description: 'A história de Ivan Ilitch, um homem que, ao enfrentar sua própria morte, começa a questionar a futilidade da vida e a busca por significado.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/a_morte_de_ivan_ilitch.jpg').default,
    },
    {
        title: 'A Metamorfose',
        author: 'Franz Kafka',
        description: 'Gregor Samsa acorda um dia transformado em um inseto gigante, e a história explora o isolamento, a alienação e a luta pela identidade.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/a_metamorfose.jpg').default,
    },
    {
        title: 'A Insustentável Leveza do Ser',
        author: 'Milan Kundera',
        description: 'Tereza, Tomas, Sabina e Franz vivem em um mundo de dilemas existenciais, onde a busca por significado é permeada pela leveza e pela inevitabilidade da vida.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/a_insustentavel_leveza_do_ser.jpg').default,
    },
    {
        title: 'O Homem Revoltado',
        author: 'Albert Camus',
        description: 'Exploração filosófica sobre a revolta humana contra a opressão e o absurdo da vida, questionando a moralidade e o sentido da existência.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/o_homem_revoltado.jpg').default,
    },
    {
        title: 'Ensaio Sobre a Cegueira',
        author: 'José Saramago',
        description: 'Uma epidemia de cegueira súbita atinge uma cidade inteira, e a obra explora como a humanidade lida com o caos e a perda de significado em uma sociedade fragmentada.',
        genre: 'Ficção Existencial',
        image: require('@site/static/img/ensaio_sobre_a_cegueira.jpg').default,
    },   
    {
      title: 'A Revolução dos Bichos',
      author: 'George Orwell',
      description: 'Uma sátira política sobre o poder e a corrupção.',
      genre: 'Fábula Política',
      image: require('@site/static/img/revolucao_bichos.jpg').default,
    },
    {
      title: 'Admirável Mundo Novo',
      author: 'Aldous Huxley',
      description: 'Uma crítica ao controle social e à busca pela perfeição.',
      genre: 'Fábula Política',
      image: require('@site/static/img/admiravel_mundo_novo.jpg').default,
    },
    {
      title: 'O Conto da Aia',
      author: 'Margaret Atwood',
      description: 'Uma distopia que explora o impacto da opressão de gênero.',
      genre: 'Fábula Política',
      image: require('@site/static/img/conto_da_aia.jpg').default,
    },
    {
      title: 'A Peste',
      author: 'Albert Camus',
      description: 'Uma alegoria sobre a luta da humanidade contra o absurdo e a opressão.',
      genre: 'Fábula Política',
      image: require('@site/static/img/a_peste.jpg').default,
    },
    {
      title: 'Laranja Mecânica',
      author: 'Anthony Burgess',
      description: 'Uma análise do livre-arbítrio e da imposição de controle social.',
      genre: 'Fábula Política',
      image: require('@site/static/img/laranja_mecanica.jpg').default,
    },
    {
      title: 'Nós',
      author: 'Yevgeny Zamyatin',
      description: 'Uma visão distópica da vida sob um regime totalitário.',
      genre: 'Fábula Política',
      image: require('@site/static/img/nos.jpg').default,
    },
    {  
      title: 'O Rei Leão',  
      author: 'Roger Allers, Rob Minkoff',  
      description: 'Uma história sobre a ascensão e queda de um governante, abordando temas como poder, responsabilidade e justiça. Embora seja um filme de animação, sua mensagem política é profunda e se alinha com o gênero de fábula política.',  
      genre: 'Fábula Política',  
      image: require('@site/static/img/rei_leao.jpg').default,
    },
    {
      title: 'A Revolta de Atlas',  
      author: 'Ayn Rand',  
      description: 'Uma alegoria da luta contra o coletivismo e a opressão governamental, onde as figuras principais são os indivíduos que se rebelam contra um governo que controla e restringe suas liberdades.',  
      genre: 'Fábula Política',  
      image: require('@site/static/img/revolta_atlas.jpg').default,
    },
    {
      title: 'Os Despossuídos',  
      author: 'Ursula K. Le Guin',  
      description: 'Uma obra que explora a dinâmica política e social de dois planetas opostos, abordando questões de liberdade, desigualdade e o contraste entre sistemas econômicos e políticos utópicos e distópicos.',  
      genre: 'Fábula Política',  
      image: require('@site/static/img/despossuídos.jpg').default,      
    },
    {
      title: 'Dom Quixote',
      author: 'Miguel de Cervantes',
      description: 'As aventuras cômicas e trágicas de um cavaleiro idealista.',
      genre: 'Clássico',
      image: require('@site/static/img/dom_quixote.jpg').default,
    },
    {
        title: 'Ulisses',
        author: 'James Joyce',
        description: 'Uma jornada literária complexa que segue Leopold Bloom e Stephen Dedalus em um único dia em Dublin, explorando temas como identidade, linguagem e a experiência humana.',
        genre: 'Clássico',
        image: require('@site/static/img/ulisses.jpg').default,
    },
    {
        title: 'O Morro dos Ventos Uivantes',
        author: 'Emily Brontë',
        description: 'A intensa história de amor e vingança entre Heathcliff e Catherine Earnshaw, ambientada em um cenário gótico e melancólico.',
        genre: 'Clássico',
        image: require('@site/static/img/morro_dos_ventos_uivantes.jpg').default,
    },
    {
        title: 'O Retrato de Dorian Gray',
        author: 'Oscar Wilde',
        description: 'A história de Dorian Gray, um jovem cuja beleza se mantém intacta enquanto seu retrato envelhece e reflete suas ações imorais.',
        genre: 'Clássico',
        image: require('@site/static/img/o_retrato_de_dorian_gray.jpg').default,
    },
    {
        title: 'Dom Casmurro',
        author: 'Machado de Assis',
        description: 'Bentinho, o narrador, questiona a fidelidade de sua esposa Capitu, explorando temas de ciúmes, dúvida e a complexidade dos sentimentos humanos.',
        genre: 'Clássico',
        image: require('@site/static/img/dom_casmurro.jpg').default,
    },
    {
        title: 'As Aventuras de Huckleberry Finn',
        author: 'Mark Twain',
        description: 'Huckleberry Finn embarca em uma jornada ao lado de Jim, um escravo fugitivo, através do rio Mississippi, explorando temas de liberdade e moralidade.',
        genre: 'Clássico',
        image: require('@site/static/img/huckleberry_finn.jpg').default,
    },
    {
        title: 'O Grande Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'A história de Jay Gatsby, um homem misterioso e rico, e seu amor obsessivo por Daisy Buchanan, ambientada nos excessos e na decadência dos anos 1920.',
        genre: 'Clássico',
        image: require('@site/static/img/o_grande_gatsby.jpg').default,
    },
    {
        title: 'Frankenstein',
        author: 'Mary Shelley',
        description: 'A história do cientista Victor Frankenstein e sua criação, um monstro que busca aceitação e compreensão, levantando questões sobre a natureza humana e a ética científica.',
        genre: 'Clássico',
        image: require('@site/static/img/frankenstein.jpg').default,
    },
    {
        title: 'Drácula',
        author: 'Bram Stoker',
        description: 'A história do conde Drácula e suas tentativas de se mudar para a Inglaterra para espalhar o mal, sendo confrontado por um grupo determinado a impedi-lo.',
        genre: 'Clássico',
        image: require('@site/static/img/dracula.jpg').default,
    },
    {
      title: 'Duna',
      author: 'Frank Herbert',
      description: 'Uma saga épica sobre política, religião e ecologia num planeta desértico.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/duna.jpg').default,
    },
    {
      title: 'Neuromancer',
      author: 'William Gibson',
      description: 'Um clássico cyberpunk que explora o futuro da tecnologia e da inteligência artificial.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/neuromancer.jpg').default,
    },
    {
      title: 'Fundação',
      author: 'Isaac Asimov',
      description: 'A luta para preservar o conhecimento humano diante da queda de um império galáctico.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/fundacao.jpg').default,
    },
    {
      title: '2001: Uma Odisseia no Espaço',
      author: 'Arthur C. Clarke',
      description: 'Uma jornada épica pelo espaço que explora a evolução da humanidade e o papel da inteligência artificial.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/2001_odisseia.jpg').default,
    },
    {
      title: 'O Fim da Infância',
      author: 'Arthur C. Clarke',
      description: 'Uma reflexão sobre o impacto de uma raça alienígena benevolente na evolução humana.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/fim_infancia.jpg').default,
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      description: 'Um futuro distópico onde os livros são proibidos e queimados para controlar o pensamento.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/fahrenheit451.jpg').default,
    },
    {
      title: 'O Homem do Castelo Alto',
      author: 'Philip K. Dick',
      description: 'Uma realidade alternativa onde os Aliados perderam a Segunda Guerra Mundial, explorando temas de opressão e identidade.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/homem_castelo_alto.jpg').default,
    },
    {
      title: 'A Máquina do Tempo',
      author: 'H.G. Wells',
      description: 'A história de um cientista que viaja para um futuro distante e descobre os destinos da humanidade.',
      genre: 'Ficção Científica',
      image: require('@site/static/img/maquina_tempo.jpg').default,
    },
    
    {
      title: 'O Silêncio dos Inocentes',
      author: 'Thomas Harris',
      description: 'A investigação sombria de um assassino em série com a ajuda de um psiquiatra psicopata.',
      genre: 'Mistério',
      image: require('@site/static/img/silencio_inocentes.jpg').default,
    },
    {
      title: 'O Assassinato no Expresso do Oriente',
      author: 'Agatha Christie',
      description: 'Hercule Poirot investiga um crime misterioso a bordo de um luxuoso comboio.',
      genre: 'Mistério',
      image: require('@site/static/img/expresso_oriente.jpg').default,
    },
    {
      title: 'O Nome da Rosa',
      author: 'Umberto Eco',
      description: 'Um monge desvenda mistérios num mosteiro medieval.',
      genre: 'Mistério',
      image: require('@site/static/img/nome_rosa.jpg').default,
    },
    {
      title: 'A Garota com a Tatuagem de Dragão',
      author: 'Stieg Larsson',
      description: 'Um jornalista e uma hacker unem forças para resolver um desaparecimento de décadas.',
      genre: 'Mistério',
      image: require('@site/static/img/garota_tatuagem.jpg').default,
    },
    {
      title: 'O Homem de Giz',
      author: 'C.J. Tudor',
      description: 'Um grupo de amigos é assombrado por eventos do passado quando desenhos de giz começam a reaparecer.',
      genre: 'Mistério',
      image: require('@site/static/img/homem_giz.jpg').default,
    },
    {
      title: 'A Verdade sobre o Caso Harry Quebert',
      author: 'Joël Dicker',
      description: 'Um jovem escritor investiga o envolvimento de seu mentor em um assassinato.',
      genre: 'Mistério',
      image: require('@site/static/img/harry_quebert.jpg').default,
    },
    {
      title: 'Sherlock Holmes: O Cão dos Baskervilles',
      author: 'Arthur Conan Doyle',
      description: 'Holmes e Watson investigam a lenda de uma fera sobrenatural aterrorizando uma família nobre.',
      genre: 'Mistério',
      image: require('@site/static/img/cao_baskervilles.jpg').default,
    },
    {
      title: 'A Paciente Silenciosa',
      author: 'Alex Michaelides',
      description: 'Uma mulher que cometeu um crime brutal permanece em silêncio, enquanto um terapeuta tenta desvendar seu segredo.',
      genre: 'Mistério',
      image: require('@site/static/img/paciente_silenciosa.jpg').default,
    },
  ];

  const [selectedGenre, setSelectedGenre] = useState<string>('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const genres = ['Todos', ...Array.from(new Set(books.map((book) => book.genre)))];

  const openModal = (book: any) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const filteredBooks = selectedGenre === 'Todos' ? books : books.filter((book) => book.genre === selectedGenre);

  return (
    <section className={styles.booksSection}>
      <div className="container">
      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
  {genres.map((genre, idx) => (
    <button
      key={idx}
      onClick={() => setSelectedGenre(genre)}
      style={{
        margin: '0.5rem',
        padding: '0.6rem 1.2rem',
        backgroundColor: selectedGenre === genre ? '#ff69b4' : '#f0f0f0',
        color: selectedGenre === genre ? '#fff' : '#333',
        border: '1px solid #ccc',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '1rem',
        boxShadow: selectedGenre === genre
          ? '0 4px 6px rgba(0, 0, 0, 0.2)'
          : '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = selectedGenre === genre ? '#ff69b4' : '#e6e6e6';
        e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = selectedGenre === genre ? '#ff69b4' : '#f0f0f0';
        e.currentTarget.style.boxShadow = selectedGenre === genre
          ? '0 4px 6px rgba(0, 0, 0, 0.2)'
          : '0 2px 4px rgba(0, 0, 0, 0.1)';
      }}
    >
      {genre}
    </button>
  ))}
</div>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {filteredBooks.map((book, idx) => (
            <div key={idx} style={{ margin: '1rem', display: 'flex', justifyContent: 'center', flex: '0 0 calc(33.33% - 2rem)' }}>
              <Book {...book} onClick={() => openModal(book)} />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectedBook && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedBook.title}</h3>
            <p><strong>Autor:</strong> {selectedBook.author}</p>
            <p>{selectedBook.description}</p>
            <button
              onClick={closeModal}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Library(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Livros de ${siteConfig.title}`}
      description="Explore nossa coleção de livros cuidadosamente selecionados."
    >
      <HighlightRow />
      <main>
        <LibraryBooks />
      </main>
    </Layout>
  );
}

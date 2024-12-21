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
      title: 'A Guerra dos Tronos',
      author: 'George R.R. Martin',
      description: 'Intrigas e batalhas numa luta épica pelo Trono de Ferro.',
      genre: 'Fantasia Épica',
      image: require('@site/static/img/guerra_dos_tronos.jpg').default,
    },
    {
      title: 'O Processo',
      author: 'Franz Kafka',
      description: 'A luta de um homem contra um sistema judicial misterioso e opressivo.',
      genre: 'Ficção Existencial',
      image: require('@site/static/img/o_processo.jpg').default,
    },
    {
      title: 'A Revolução dos Bichos',
      author: 'George Orwell',
      description: 'Uma sátira política sobre o poder e a corrupção.',
      genre: 'Fábula Política',
      image: require('@site/static/img/revolucao_bichos.jpg').default,
    },
    {
      title: 'Dom Quixote',
      author: 'Miguel de Cervantes',
      description: 'As aventuras cômicas e trágicas de um cavaleiro idealista.',
      genre: 'Clássico',
      image: require('@site/static/img/dom_quixote.jpg').default,
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

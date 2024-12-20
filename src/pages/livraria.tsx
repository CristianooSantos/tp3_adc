import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
 
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
 
function Book({ title, author, description, image }: { title: string; author: string; description: string; image: string }) {
  return (
    <div
      className={clsx('card', styles.bookCard)}
      style={{
        backgroundColor: '#2c2c2c',
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
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05) rotateX(10deg) rotateY(10deg)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.3)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div className="card__image" style={{ width: '100%', height: '75%' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Alterado para evitar corte da imagem
            borderRadius: '4px',
          }}
        />
      </div>
      <div className="card__body" style={{ textAlign: 'center', padding: '0.5rem' }}>
        <h3 style={{ margin: '0.5rem 0', fontSize: '1rem' }}>{title}</h3>
        <p style={{ margin: '0.2rem 0', fontSize: '0.9rem' }}><strong>Autor:</strong> {author}</p>
        <p style={{ margin: '0.2rem 0', fontSize: '0.8rem', color: '#aaa' }}>{description}</p>
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
      image: require('@site/static/img/harry1.jpg').default,
    },
    {
      title: 'Harry Potter e a Câmara Secreta',
      author: 'J.K. Rowling',
      description: 'Harry descobre segredos sombrios em Hogwarts.',
      image: require('@site/static/img/harry2.jpg').default,
    },
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'J.K. Rowling',
      description: 'Uma aventura cheia de mistérios envolvendo Sirius Black.',
      image: require('@site/static/img/harry3.jpg').default,
    },
    {
      title: 'Harry Potter e o Cálice de Fogo',
      author: 'J.K. Rowling',
      description: 'Harry participa no perigoso Torneio Tribruxo.',
      image: require('@site/static/img/harry4.jpg').default,
    },
    {
      title: 'Harry Potter e a Ordem da Fênix',
      author: 'J.K. Rowling',
      description: 'A resistência contra Lord Voldemort ganha força.',
      image: require('@site/static/img/harry5.jpg').default,
    },
    {
      title: 'Harry Potter e o Enigma do Príncipe',
      author: 'J.K. Rowling',
      description: 'Segredos do passado de Voldemort são revelados.',
      image: require('@site/static/img/harry6.jpg').default,
    },
    {
      title: 'Harry Potter e as Relíquias da Morte',
      author: 'J.K. Rowling',
      description: 'A batalha final entre Harry e Voldemort.',
      image: require('@site/static/img/harry7.jpg').default,
    },
  ];
 
  return (
    <section className={styles.booksSection}>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {books.map((book, idx) => (
            <div key={idx} style={{ margin: '1rem', display: 'flex', justifyContent: 'center', width: '33%' }}>
              <Book {...book} />
            </div>
          ))}
        </div>
      </div>
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
 
 
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
    <div className={clsx('card', styles.bookCard)} style={{ backgroundColor: '#2c2c2c', color: '#fff', padding: '1rem', borderRadius: '8px', margin: '0.5rem' }}>
      <div className="card__image">
        <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p><strong>Autor:</strong> {author}</p>
        <p>{description}</p>
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
      image: '/img/harry1.jpg',
    },
    {
      title: 'Harry Potter e a Câmara Secreta',
      author: 'J.K. Rowling',
      description: 'Harry descobre segredos sombrios em Hogwarts.',
      image: '/img/harry-potter-2.jpg',
    },
    {
      title: 'Harry Potter e o Prisioneiro de Azkaban',
      author: 'J.K. Rowling',
      description: 'Uma aventura cheia de mistérios envolvendo Sirius Black.',
      image: '/img/harry-potter-3.jpg',
    },
    {
      title: 'Harry Potter e o Cálice de Fogo',
      author: 'J.K. Rowling',
      description: 'Harry participa no perigoso Torneio Tribruxo.',
      image: '/img/harry-potter-4.jpg',
    },
    {
      title: 'Harry Potter e a Ordem da Fênix',
      author: 'J.K. Rowling',
      description: 'A resistência contra Lord Voldemort ganha força.',
      image: '/img/harry-potter-5.jpg',
    },
    {
      title: 'Harry Potter e o Enigma do Príncipe',
      author: 'J.K. Rowling',
      description: 'Segredos do passado de Voldemort são revelados.',
      image: '/img/harry-potter-6.jpg',
    },
    {
      title: 'Harry Potter e as Relíquias da Morte',
      author: 'J.K. Rowling',
      description: 'A batalha final entre Harry e Voldemort.',
      image: '/img/harry-potter-7.jpg',
    },
  ];

  return (
    <section className={styles.booksSection}>
      <div className="container">
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {books.map((book, idx) => (
            <div key={idx} style={{ flex: '0 0 30%', boxSizing: 'border-box' }}>
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
      description="Explore nossa coleção de livros cuidadosamente selecionados.">
      <HighlightRow />
      <main>
        <LibraryBooks />
      </main>
    </Layout>
  );
}

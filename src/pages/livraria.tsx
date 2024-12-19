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
      title: 'Introdução ao TypeScript',
      author: 'João Silva',
      description: 'Aprenda os conceitos fundamentais do TypeScript com este guia completo.',
      image: '/img/typescript-book.jpg',
    },
    {
      title: 'CSS Moderno',
      author: 'Maria Oliveira',
      description: 'Descubra técnicas modernas de design com CSS.',
      image: '/img/css-book.jpg',
    },
    {
      title: 'JavaScript Avançado',
      author: 'Carlos Pereira',
      description: 'Explore os conceitos avançados de JavaScript para desenvolvedores experientes.',
      image: '/img/javascript-book.jpg',
    },
    {
      title: 'React para Iniciantes',
      author: 'Ana Costa',
      description: 'Um guia prático para começar com React.',
      image: '/img/react-book.jpg',
    },
    {
      title: 'Node.js Essencial',
      author: 'Pedro Lima',
      description: 'Aprenda a construir aplicações robustas com Node.js.',
      image: '/img/node-book.jpg',
    },
    {
      title: 'Design UX/UI',
      author: 'Laura Souza',
      description: 'Descubra como criar interfaces incríveis.',
      image: '/img/ux-book.jpg',
    },
    {
      title: 'Python para Todos',
      author: 'Bruno Martins',
      description: 'Introdução ao Python para principiantes.',
      image: '/img/python-book.jpg',
    },
    {
      title: 'Algoritmos e Estruturas de Dados',
      author: 'Ricardo Mendes',
      description: 'Entenda os fundamentos de algoritmos.',
      image: '/img/algorithms-book.jpg',
    },
    {
      title: 'Desenvolvimento Ágil',
      author: 'Fernanda Alves',
      description: 'Técnicas para equipes ágeis e produtivas.',
      image: '/img/agile-book.jpg',
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

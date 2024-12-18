import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/123.svg').default,
    description: (
      <>
        A aplicação de Gestão de Biblioteca foi projetada desde o início para ser facilmente instalada 
        e utilizada, permitindo que comece rapidamente a gerir a sua biblioteca de forma eficiente.
      </>
    ),
  },
  {
    title: 'Gestão Simples e Eficaz',
    Svg: require('@site/static/img/1234.svg').default,
    description: (
      <>
        A nossa aplicação foi desenvolvida para oferecer uma experiência intuitiva, garantindo que as tarefas
        de gestão de livros, leitores e empréstimos sejam realizadas de forma prática e sem complicações.
      </>
    ),
  },
  {
    title: 'Funcionalidades Abrangentes',
    Svg: require('@site/static/img/file.svg').default,
    description: (
      <>
        Com um conjunto completo de ferramentas, a aplicação permite realizar operações como registo de 
        livros, monitorização de empréstimos e notificações de prazos, assegurando um controlo total sobre a sua biblioteca.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

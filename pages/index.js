import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Olá! Sou o <strong>Felipe</strong>, engenheiro de software criador 
          do <strong>Pedido Agora</strong> e ciclista nas horas vagas. Você {' '}
          pode entrar em contato comigo pelo {' '}
          <a 
            href="https://instagram.com/felipesntsassis"
            target="_blank" 
          >
            Instagram
          </a>.
        </p>
        <p>
          (Este é um exemplo de site - Você construirá um site como este em {' '}
          <a href="https://nextjs.org/learn">nosso tutorial de Next.js</a>)
        </p>
      </section>
    </Layout>
  );
}

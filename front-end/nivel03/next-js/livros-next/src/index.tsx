import Head from 'next/head';
import {Menu} from '../componentes/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loja Next</title>
      </Head>

      <Menu />

      <main style={styles.main}>
        <h1 style={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}

const styles = {
  main: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

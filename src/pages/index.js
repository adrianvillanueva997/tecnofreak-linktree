import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Header from './components/Header';
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Tecnofreak - linktree</title>
        <meta name="description" content="VXDas personal links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header></Header>

        <div className={styles.description}></div>
      </main>
    </>
  );
}

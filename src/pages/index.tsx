import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TSendTextOracle from '@/components/templates/TSendTextOracle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Codex Mutatio</title>
        <meta name="description" content="App inspirado no livro das mutações." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TSendTextOracle />
      </main>
    </>
  )
}

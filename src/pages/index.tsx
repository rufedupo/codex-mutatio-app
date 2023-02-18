import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TSendTextOracle from '@/components/templates/TSendTextOracle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Codex Mutatio - Inspirado no livro das mutações.</title>
        <meta name="description" content="Codex Mutatio - App inspirado no livro das mutações." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/rufedupo/codex-mutatio-app/main/public/assets/images/iconPage/TartugaMutatioInvertido.png"/>
        <link href="https://fonts.googleapis.com/css2?family=Babylonica&family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Babylonica&family=Roboto:ital,wght@0,100;0,400;0,500;1,900&display=swap" rel="stylesheet"></link>      
      </Head>
      <main className={styles.main}>
        <TSendTextOracle />
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import TSendTextOracle from '@/components/templates/TSendTextOracle'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

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

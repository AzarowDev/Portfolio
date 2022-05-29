import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { DefaultSeo, NextSeo } from 'next-seo'
import Transitions from '../components/transitions'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `http://127.0.0.1:3000${router.route}`
  return <>
    <Head>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
    </Head>
    <DefaultSeo
      titleTemplate='%s - Nas-Studio'/>
    <Navbar />
    <Component {...pageProps} canonical={url} key={router.route} />
  </>
}

export default MyApp

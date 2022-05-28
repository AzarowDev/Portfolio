import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Nas-Studio</title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}

export default MyApp

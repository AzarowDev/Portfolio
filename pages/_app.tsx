import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Nas-Studio</title>
    </Head>
    <Navbar></Navbar>
    <Component {...pageProps} />
  </>
}

export default MyApp

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
      <main>
        <h1>Script component examples</h1>
        <ul>
          <li>
            <Link href="/test">
              <a>Test</a>
            </Link>
          </li>
        </ul>
      </main>
  )
}

export default Home

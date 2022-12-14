import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '@components/Layout'
const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className="text-3xl font-bold underline">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </div>
    </Layout>
  )
}

export default Home

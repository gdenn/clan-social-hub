import type { NextPage } from 'next'
import Layout from '../components/layout/Layout'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.dummy}/>
    </Layout>
  )
}

export default Home

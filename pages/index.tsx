import type { NextPage } from 'next'

import { NewsFeed } from '../components/newsfeed'
import Layout from '../components/layout/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <NewsFeed />
    </Layout>
  );
}

export default Home

import type { NextPage } from 'next'

import { NewsFeed } from '../components/newsfeed'
import Layout from '../components/layout/Layout'


const Home: NextPage = () => {
  return (
    <Layout
      left={<NewsFeed />}
      center={<NewsFeed />}
      right={<NewsFeed />}
    />
  );
}

export default Home

import Head from 'next/head';
import Posts from './posts';

const Home = () => (
  <>
    <Head>
      <title>My Post</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Posts />
  </>
);

export default Home;

import Head from 'next/head';
import Posts from './posts';
import Sidebar from './Sidebar';
import '../public/globals.css';

const index = () => (
  <>
    <Head>
      <title>My Post</title>
    </Head>

    <Sidebar />
    <Posts />
  </>
);

export default index;

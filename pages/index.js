import Head from 'next/head';
import Posts from './posts';
import Sidebar from './Sidebar';

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

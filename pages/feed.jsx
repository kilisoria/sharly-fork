import { Feed } from '../page-components/Feed';
import Head from 'next/head';

const FeedPage = () => {
  return (
    <>
      <Head>
        <title>Feed Manager</title>
      </Head>
      <Feed />
    </>
  );
};

export default FeedPage;

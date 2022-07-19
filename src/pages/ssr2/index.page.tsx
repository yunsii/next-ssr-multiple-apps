import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Link from 'next/link';

import BasicLayout from '../../layouts/ssr2/BasicLayout';

interface IPageProps {
  host?: any;
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <BasicLayout>
      <h1>SSR 2</h1>
      <p>
        已确定为 ssr2 应用，无需额外使用 host 判断。
        <Link href='/test'>
          <a
            style={{
              color: 'blue',
              textDecoration: 'underline',
            }}
          >
            Go to test page
          </a>
        </Link>
      </p>
      <div style={{ whiteSpace: 'pre' }}>server side props: {JSON.stringify(props, null, 2)}</div>
    </BasicLayout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IPageProps> = async (ctx) => {
  const host = ctx.req.headers.host;
  return {
    props: {
      host,
    },
  };
};

import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import Link from 'next/link';

import BasicLayout from '../../layouts/ssr1/BasicLayout';

interface IPageProps {
  host?: any;
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <BasicLayout>
      <h1>SSR 1</h1>
      <p>已确定为 ssr1 应用，无需额外使用 host 判断。</p>
      <ul>
        <li>
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
        </li>
        <li>
          <Link href='/parent'>
            <a
              style={{
                color: 'blue',
                textDecoration: 'underline',
              }}
            >
              Go to parent page
            </a>
          </Link>
        </li>
        <li>
          <Link href='/flat/new-york'>
            <a
              style={{
                color: 'blue',
                textDecoration: 'underline',
              }}
            >
              Go to [state: new-york] page
            </a>
          </Link>
        </li>
      </ul>
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

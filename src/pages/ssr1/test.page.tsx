import { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';

import BasicLayout from '../../layouts/ssr1/BasicLayout';

export interface ITestProps {
  data: number[];
}

const Test: NextPage<ITestProps> = ({ data }) => {
  return (
    <BasicLayout>
      <h1>SSR 1 - Test</h1>
      <p>
        <Link href='/ssr1' as='/'>
          <a
            style={{
              color: 'blue',
              textDecoration: 'underline',
            }}
          >
            Go to ssr1 home page
          </a>
        </Link>
      </p>
      data: {data}
    </BasicLayout>
  );
};

export default Test;

export const getServerSideProps: GetServerSideProps<ITestProps> = async () => {
  return {
    props: {
      data: [1, 2, 3],
    },
  };
};

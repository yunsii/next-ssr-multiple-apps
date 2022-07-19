import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BasicLayout from '../../../layouts/ssr1/BasicLayout';

export interface IChildProps {
  data: number[];
}

const Child: NextPage<IChildProps> = ({ data }) => {
  const router = useRouter();
  const { child } = router.query;

  return (
    <BasicLayout>
      <h1>SSR 1 - Parent - {child}</h1>
      <ul>
        <li>
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
      </ul>
      data: {data}
    </BasicLayout>
  );
};

export default Child;

export const getServerSideProps: GetServerSideProps<IChildProps> = async () => {
  console.log('call child getServerSideProps');
  return {
    props: {
      data: [1, 2, 3],
    },
  };
};

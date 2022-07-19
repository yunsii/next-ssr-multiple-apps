import { NextPage } from 'next';
import Link from 'next/link';

import BasicLayout from '../../layouts/ssr1/BasicLayout';

const Fallback: NextPage = () => {
  console.log('render Fallback');

  return (
    <BasicLayout>
      <h1>SSR 1 - Fallback</h1>
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
    </BasicLayout>
  );
};

export default Fallback;

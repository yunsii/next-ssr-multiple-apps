import { NextPage } from 'next';
import Link from 'next/link';

import BasicLayout from '../../layouts/ssr2/BasicLayout';

const Test: NextPage = () => {
  return (
    <BasicLayout>
      <h1>SSR 2 - Test</h1>
      <p>
        <Link href='/ssr2' as='/'>
          <a
            style={{
              color: 'blue',
              textDecoration: 'underline',
            }}
          >
            Go to ssr2 home page
          </a>
        </Link>
      </p>
    </BasicLayout>
  );
};

export default Test;

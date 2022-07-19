import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import BasicLayout from '../../../../layouts/ssr1/BasicLayout';

const Test: NextPage = () => {
  const router = useRouter();

  return (
    <BasicLayout>
      <h1>SSR 1 - [state-cities: {router.query.name}]</h1>

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
      </ul>
    </BasicLayout>
  );
};

export default Test;

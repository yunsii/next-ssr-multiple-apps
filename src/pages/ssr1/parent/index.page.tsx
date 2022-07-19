import { NextPage } from 'next';
import Link from 'next/link';

import Button from './components/Button';
import BasicLayout from '../../../layouts/ssr1/BasicLayout';

const Test: NextPage = () => {
  return (
    <BasicLayout>
      <h1>SSR 1 - Parent</h1>

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
          <Link href='/parent/apple'>
            <a
              style={{
                color: 'blue',
                textDecoration: 'underline',
              }}
            >
              Go to [child: apple] page
            </a>
          </Link>
        </li>
      </ul>

      <Button />
    </BasicLayout>
  );
};

export default Test;

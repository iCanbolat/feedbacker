'use client';

import React, { ReactNode } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../lib/utils';

const NextBreadcrumb = () => {
  const paths = usePathname();
  const searchParams = useSearchParams();

  const items: { key: string; value: string }[] = [];
  searchParams.forEach((value, key) => {
    items.push({
      key,
      value,
    });
  });
 
  const getHref = React.useCallback((index: any) => {
    let href = `${paths}?`;
    items
      .slice(0, index + 1)
      .forEach(
        (item, idx) =>
          (href +=
            item.key +
            '=' +
            item.value +
            `${items.length - 1 == idx ? '' : '&'}`)
      );
    return href;
  }, [searchParams]);

  return (
    <div>
      <ul className='flex py-2 text-sm'>
        <li className={'mr-1'}>
          <Link href={'/feedbacker'}>Feeds</Link>
        </li>
        {items.length > 0 && <span> {'>'} </span>}
        {items.map((link, index) => {
          let href = getHref(index);
          let itemLink =
            link.value.charAt(0).toLocaleUpperCase() + link.value.slice(1);
          return (
            <React.Fragment key={index}>
              <li
                className={cn(
                  'hover:underline mx-2',
                  items.length - 1 === index ? 'font-bold' : ''
                )}
              >
                <Link href={href}>{itemLink}</Link>
              </li>
              {items.length !== index + 1 && <span> {'>'} </span>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;

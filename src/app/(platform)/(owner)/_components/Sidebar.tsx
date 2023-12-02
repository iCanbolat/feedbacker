'use client';
import React from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  storageKey?: string;
};
const NavItem = dynamic(() => import('./NavItem'), {
  ssr: false,
  loading: () => <Loader/>,
});

const Loader = () => (
  <div className='flex items-center gap-x-2 mt-5'>
    <div className='w-10 h-10 relative shrink-0'>
      <Skeleton className='h-full w-full absolute' />
    </div>
    <Skeleton className='h-10 w-full' />
  </div>
);

const Sidebar = ({ storageKey = 't-sidebar-state' }: Props) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const currentOrganization = useReadLocalStorage('current')
  console.log(currentOrganization);
  


  const data = [
    {
      id: '2',
      name: 'Mergeflo',
    },
    {
      id: '3',
      name: 'zrree',
    },
    {
      id: '4',
      name: 'ttrtr',
    },
  ];

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );
 const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <>
      <div className='font-medium text-xs flex items-center mb-1'>
        <span className='pl-4'>Workspaces</span>
        <Button
          asChild
          type='button'
          size='icon'
          variant='ghost'
          className='ml-auto'
        >
          <Link href={'/select-org'}>
            <Plus />
          </Link>
        </Button>
      </div>
      <Accordion defaultValue={defaultAccordionValue} type='multiple'>
        {data.map((item: any) => (
          <NavItem
            organization={item}
            isActive={currentOrganization === item.name}
            isExpanded={expanded[item.id]}
            key={item.id}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  );
};

export default Sidebar;

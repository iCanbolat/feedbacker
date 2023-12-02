'use client';

import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocalStorage } from 'usehooks-ts';
import { usePathname, useRouter } from 'next/navigation';

type Props = {};

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

const SelectOrganization = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrentOrganization] = useLocalStorage(
    'current',
    data[0].name ?? ''
  );
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const orgName = data.find((i) => i.id === pathname.split('/')[2]).name;
    console.log(orgName);

    setCurrentOrganization(orgName);
  }, [pathname]);

  return (
    <div>
      {mounted && (
        <Select onValueChange={(i) => router.push(`/dashboard/${i}`)}>
          <SelectTrigger className='w-[280px]'>
            <SelectValue placeholder={current} />
          </SelectTrigger>
          <SelectContent>
            {data.map((i: any, key: any) => (
              <SelectItem key={key} value={i.id}>
                {i.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default SelectOrganization;

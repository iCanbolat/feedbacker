'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
type Props = {};

const CustomSelect = (props: Props) => {
  const [hover, setHover] = React.useState(false);
  return (
    <>
      {hover ? (
        <Select >
          <SelectTrigger  className='w-[180px] mr-4'>
            <SelectValue placeholder='Select a fruit' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        <div
          onMouseEnter={() => setHover(true)}
          className='text-sm rounded-lg border-slate-300 border-2 p-2 mr-4'
        >
          <p>Assigned to Fatih Canbolat</p>
        </div>
      )}
    </>
  );
};

export default CustomSelect;

import React from 'react';
import { columns } from './columns';
import { DataTable } from '../../_components/task-table/data-table';

type Props = {
  params: {
    id: any;
  };
};

const ProductDashboard = ({ params: { id } }: Props) => {
  const data = [
    {
      id: 'TASK-8782',
      title:
        "You can't compress the program without quantifying the open-source SSD pixel!",
      status: 'in progress',
      label: 'documentation',
      priority: 'medium',
    },
    {
      id: 'TASK-7878',
      title:
        'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
      status: 'backlog',
      label: 'documentation',
      priority: 'medium',
    },
  ];
  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};

export default ProductDashboard;

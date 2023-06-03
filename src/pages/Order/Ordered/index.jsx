import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrdered } from '../handal';

const index = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getOrdered(setdata);
  }, []);
  return (
    <div>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            // detailUser(record);
          },
        })}
      />
    </div>
  );
};
export default index;

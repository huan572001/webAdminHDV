import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrdered } from '../handal';
import { OrderDetail } from '../OrderDetail';

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
            OrderDetail(record?.id);
          },
        })}
      />
    </div>
  );
};
export default index;

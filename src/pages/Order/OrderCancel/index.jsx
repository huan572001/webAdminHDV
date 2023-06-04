import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrderCancel } from '../handal';
import { listProductByOrderID } from '@/pages/User/listOrder/listProductOrder';

const index = ({ load }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getOrderCancel(setdata);
  }, [load]);
  return (
    <div>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            listProductByOrderID(record?.id);
          },
        })}
      />
    </div>
  );
};
export default index;

import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { columns } from './columns';
import { getOrderConfirm } from '../handal';
import { listProductByOrderID } from '@/pages/User/listOrder/listProductOrder';

const index = ({ setLoadTab }) => {
  const [data, setdata] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (load) {
      getOrderConfirm(setdata);
      setLoad(false);
      setLoadTab((tab) => (tab += 1));
    }
  }, [load]);
  return (
    <div>
      <Table
        columns={columns(setLoad)}
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

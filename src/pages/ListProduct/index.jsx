import { Table } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { columns } from './columns';
import { ProductAPI } from '@/services/Admin/product';
import { detailproduct } from './editProduct/ModalDetail';

const index = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getListProduct();
  }, []);
  const getListProduct = async () => {
    try {
      const a = await ProductAPI.ListProduct();
      if (a?.success) {
        setdata(a.data);
      }
    } catch (error) {}
  };
  return (
    <div>
      <h1>Danh sach san pham</h1>
      <Table
        columns={columns()}
        dataSource={data}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => {
            detailproduct(record);
          },
        })}
      />
    </div>
  );
};
export default index;

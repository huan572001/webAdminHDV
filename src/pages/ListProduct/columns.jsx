import { showDeleteOderModal } from '@/components/AccountModal/Modal';
import { DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from './handal';

export const columns = () => {
  const navigate = useNavigate();
  return [
    {
      title: 'Tên sản phẩm',
      key: '1',
      dataIndex: 'name',
    },
    {
      title: 'Giá nhập',
      key: '2',
      dataIndex: 'price_in',
    },
    {
      title: 'Giá bán',
      key: '3',
      dataIndex: 'price_sell',
    },
    {
      title: 'so luong da ban',
      key: '4',
      dataIndex: 'quantity_sold',
    },
    {
      title: 'Trang thai',
      key: '5',
      dataIndex: 'status',
      render: (_, info) => (
        <>{info?.status ? 'đang bán' : 'ngừng bán'}</>
        // </Space>
      ),
    },
    {
      title: 'so luong ton',
      key: '7',
      dataIndex: 'quantity',
    },
    {
      title: 'giam gia',
      key: '7',
      dataIndex: 'discout',
    },
    {
      title: 'Trang thai',
      key: '8',
      render: (_, info) => (
        <DeleteOutlined
          onClick={(e) => {
            e.stopPropagation();
            showDeleteOderModal(() => deleteProduct(info?.id));
          }}
        />
        // </Space>
      ),
    },
  ];
};

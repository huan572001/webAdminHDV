import { OrderedListOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
// import { listOrder } from './listOrder';

export const columns = () => {
  const navigate = useNavigate();
  return [
    {
      title: 'OrderId',
      key: '1',
      dataIndex: 'id',
    },
    {
      title: 'Địa chỉ',
      key: '3',
      dataIndex: 'address',
    },
    {
      title: 'UserId',
      key: '2',
      dataIndex: 'user_id',
    },
  ];
};

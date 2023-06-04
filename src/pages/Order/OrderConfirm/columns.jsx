import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { cancelOrder, confirmOrder } from '../handal';
// import { listOrder } from './listOrder';

export const columns = (setLoad) => {
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
    {
      title: 'Hoạt động',
      key: '6',
      render: (_, info) => (
        <>
          <CheckOutlined
            onClick={async (e) => {
              e.stopPropagation();
              if (await confirmOrder(info?.id)) {
                setLoad(true);
              }
            }}
          />
          <Divider type="vertical" />
          <CloseOutlined
            onClick={async (e) => {
              e.stopPropagation();
              if (await cancelOrder(info?.id)) {
                setLoad(true);
              }
            }}
          />
        </>
      ),
    },
  ];
};

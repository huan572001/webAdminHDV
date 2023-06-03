import { useAuth } from '@/context/AuthProvider';
import {
  ApartmentOutlined,
  AuditOutlined,
  BarChartOutlined,
  ContactsOutlined,
  DatabaseOutlined,
  DollarOutlined,
  FileAddOutlined,
  FolderOpenOutlined,
  HomeOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletOutlined,
} from '@ant-design/icons';
// import { Books, BellRing, Stack, User } from '@/assets';
const LayoutAdmin = [
  {
    label: 'Quản lý sản phâm',
    key: 'ListProduct',
    icon: <UserAddOutlined />,
  },
  {
    label: 'Quản lý người dùng',
    key: 'ListUser',
    icon: <UserAddOutlined />,
  },
  {
    label: 'Quản lý đơn hàng',
    key: 'ListOrder',
    icon: <UserAddOutlined />,
  },
];
const LayoutUser = [];
const Layout = [
  {
    label: 'Dashboard',
    key: 'Dashboard',
    icon: <HomeOutlined />,
  },
];

const Out = () => {
  const auth = useAuth();
  let R = null;
  if (auth?.user?.data?.role === 0) {
    R = [...Layout, ...LayoutAdmin];
  } else {
    R = [...Layout, ...LayoutUser];
  }
  return R;
};
export default Out;

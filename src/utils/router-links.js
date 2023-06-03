const Util = (name) => {
  const array = {
    Login: '/auth/login',
    Dashboard: '/',
    ListProduct: '/ListProduct',
    ListUser: '/ListUser',
    ListOrder: '/ListOrder',
  };
  return array[name];
};
export default Util;

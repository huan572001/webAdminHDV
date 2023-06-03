import { OrderAPI } from '@/services/Admin/order';

export const getOrdered = async (getdata) => {
  try {
    const a = await OrderAPI.getOrdered();
    getdata(a?.send_data);
  } catch (error) {
    showConfirmError();
  }
};

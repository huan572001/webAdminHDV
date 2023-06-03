import { ADMIN_API_PATH } from '@/constant/api';
import axiosClient from '../axiosClient';

export const OrderAPI = {
  getOrdered: async () => {
    const url = `/${ADMIN_API_PATH}/order-true`;
    return axiosClient.get(url);
  },
  deleteProduct: async (id) => {
    const url = `/${ADMIN_API_PATH}/delete-product/${id}`;
    return axiosClient.delete(url);
  },
  editProduct: async (id, data) => {
    const url = `/${ADMIN_API_PATH}/edit-product/${id}`;
    return axiosClient.put(url, data);
  },
};

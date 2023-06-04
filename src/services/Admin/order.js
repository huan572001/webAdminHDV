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
  getOrderCancel: async () => {
    const url = `/${ADMIN_API_PATH}/order-false`;
    return axiosClient.get(url);
  },
  getOrderConfirm: async () => {
    const url = `/${ADMIN_API_PATH}/all-order`;
    return axiosClient.get(url);
  },
  cancelOrder: async (id) => {
    const url = `/${ADMIN_API_PATH}/accept-orderf/${id}`;
    return axiosClient.put(url);
  },
  confirmOrder: async (id) => {
    const url = `/${ADMIN_API_PATH}/accept-ordert/${id}`;
    return axiosClient.put(url);
  },
};

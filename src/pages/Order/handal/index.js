import {
  showConfirmError,
  showConfirmSuccess,
} from '@/components/AccountModal/Modal';
import { OrderAPI } from '@/services/Admin/order';

export const getOrdered = async (getdata) => {
  try {
    const a = await OrderAPI.getOrdered();
    getdata(a?.send_data);
  } catch (error) {}
};
export const getOrderCancel = async (getdata) => {
  try {
    const a = await OrderAPI.getOrderCancel();
    getdata(a?.send_data);
  } catch (error) {}
};
export const getOrderConfirm = async (getdata) => {
  try {
    const a = await OrderAPI.getOrderConfirm();
    getdata(a?.send_data);
  } catch (error) {}
};
export const confirmOrder = async (id) => {
  try {
    const a = await OrderAPI.confirmOrder(id);
    if (a) {
      showConfirmSuccess();
      return true;
    }
  } catch (error) {
    showError();
  }
};
export const cancelOrder = async (id) => {
  try {
    const a = await OrderAPI.cancelOrder(id);
    if (a) {
      showConfirmSuccess();
      return true;
    }
  } catch (error) {
    showError();
  }
};

import {
  showConfirmError,
  showConfirmSuccess,
} from '@/components/AccountModal/Modal';
import { ProductAPI } from '@/services/Admin/product';

export const deleteProduct = async (id) => {
  try {
    const a = await ProductAPI.deleteProduct(id);
    if (a?.success) {
      showConfirmSuccess();
    } else {
      showConfirmError();
    }
  } catch (error) {
    showConfirmError();
  }
};
export const editProduct = async (id, data) => {
  try {
    const a = await ProductAPI.editProduct(id, data);
    if (a?.success) {
      showConfirmSuccess();
    } else {
      showConfirmError();
    }
  } catch (error) {
    showConfirmError();
  }
};

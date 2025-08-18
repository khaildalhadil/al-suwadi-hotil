import { toast } from 'react-toastify';
export const errorAlert = (message) => toast.error(message);
export const successAlert = (message) => toast.success(message);
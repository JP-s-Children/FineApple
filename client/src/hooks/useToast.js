import { useRecoilState } from 'recoil';
import toastState from '../recoil/atoms/toastState';

const useToast = () => {
  const [toasts, setToasts] = useRecoilState(toastState);

  const newId = () => Math.max(...toasts.map(({ id }) => id), 0) + 1;

  const create = toastInfo => {
    setToasts([...toasts, { ...toastInfo, id: newId() }]);
  };

  const remove = toastId => {
    setToasts(toasts => toasts.filter(toast => toast.id !== toastId));
  };

  const success = toastInfo => {
    create({ ...toastInfo, type: 'success' });
  };

  const warning = toastInfo => {
    create({ ...toastInfo, type: 'warning' });
  };

  const error = toastInfo => {
    create({ ...toastInfo, type: 'error' });
  };

  return { create, remove, success, warning, error };
};

export default useToast;

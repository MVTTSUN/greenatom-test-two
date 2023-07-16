import { Navigate, Outlet } from 'react-router-dom';
import { authStore } from '../stores/auth-store';
import { observer } from 'mobx-react-lite';

export const ProtectedRoute = observer(() => {
  const { isLogin } = authStore;

  return isLogin ? <Outlet /> : <Navigate to="/sign-in" />;
});

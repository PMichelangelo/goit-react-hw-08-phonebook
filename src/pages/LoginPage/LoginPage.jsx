import { useSelector, useDispatch } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <LoginForm
        onSubmit={handleLogin}
        isLoading={authLoading}
        error={authError}
      />
    </div>
  );
};

export default LoginPage;

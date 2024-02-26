import { useSelector, useDispatch } from 'react-redux';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h1>Sign up</h1>
      {authLoading && <p>...Register in progress</p>}
      <RegisterForm onSubmit={handleSignup} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default RegisterPage;

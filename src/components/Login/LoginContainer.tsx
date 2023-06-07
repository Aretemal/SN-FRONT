import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/hook';
import { authentication } from '../../store/slices/authSlice';
import Login from './Login';
import { IOnAuthentication } from './LoginInterface';

const LoginContainer:React.FC = () => {
  const { isAuth, authLogin } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const onAuthentication = (data:IOnAuthentication) => {
    dispatch(authentication(data));
  };

  return (
    <Login authLogin={authLogin} isAuth={isAuth} onAuthentication={onAuthentication} />
  );
};
export default LoginContainer;

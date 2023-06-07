import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import SignInSchema from '../../utils/validators/LoginSchema';
import styles from './Login.module.css';
import UserIcon from '../../assets/images/icons/UserIcon.png';
import LockIcon from '../../assets/images/icons/LockIcon.png';
import BackgroundLogin from '../../assets/images/BackgroundLogin.jpg';
import { ILoginProps } from './LoginInterface';

const Login:React.FC<ILoginProps> = ({
  onAuthentication, isAuth, authLogin,
}) => {
  if (isAuth) {
    return <Navigate to={`/profile/${authLogin}`} />;
  }
  return (
    <div className={styles.container}>
      <img className={styles.backgroundTree} src={BackgroundLogin} alt="BackgroundLogin" />
      <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={(values) => {
          onAuthentication({ login: values.login, password: values.password });
        }}
        validationSchema={SignInSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h1>Sign in</h1>
            <div className={styles['form-item']}>
              <img className={styles.UserIcon} src={UserIcon} alt="UserIcon" />
              <Field
                className={styles.field}
                placeholder="Your login"
                name="login"
              />
              {errors.login && touched.login ? (
                <div className={styles.error}>{errors.login}</div>
              ) : null}
            </div>
            <div className={styles['form-item']}>
              <img className={styles.LockIcon} src={LockIcon} alt="LockIcon" />
              <Field
                className={styles.field}
                placeholder="Your password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div className={styles.error}>{errors.password}</div>
              ) : null}
            </div>
            <button
              disabled={
                  (!!(errors.login && touched.login)
                    || !!(errors.password && touched.password))
                }
              className={styles.button}
              type="submit"
            >
              Sign in
            </button>
            <span className={styles.or}> Or </span>
            <NavLink to="/registration" className={styles.registration}>
              Сreate a new account
            </NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

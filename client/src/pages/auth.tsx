import React from 'react';
import LoginForm from '../modules/LoginForm/components/LoginForm';
import styles from './styles/auth.module.scss'

function Auth() {
  return (
    <section className={styles.auth}>
      <div className={styles['auth__content']}>
        <LoginForm />
      </div>
    </section>
  );
}

export default Auth;

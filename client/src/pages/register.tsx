import React from 'react';
import RegisterForm from '../modules/RegisterForm/components/RegisterForm';
import styles from './register.module.scss'

function register() {
  return (
    <section className={styles.auth}>
      <div className={styles['auth__content']}>
        <RegisterForm />
      </div>
    </section>
  );
}

export default register;

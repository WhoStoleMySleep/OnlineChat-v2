import React from 'react';
import RegisterForm from '../modules/RegisterForm/components/RegisterForm';
import styles from './styles/register.module.scss'

function register() {
  return (
    <section className={styles.register}>
      <div className={styles['register__content']}>
        <RegisterForm />
      </div>
    </section>
  );
}

export default register;

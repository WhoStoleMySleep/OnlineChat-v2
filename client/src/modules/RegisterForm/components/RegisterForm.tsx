import { LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import Button from '../../../components/Button/Button';
import WhiteBlock from '../../../components/WhiteBlock/WhiteBlock';
import Link from 'next/link';
import styles from './register-form.module.scss';

const success = false;

function RegisterForm(props: any) {
  const {
    touched,  
    errors,
    handleChange,
    handleBlur,
  } = props
  
  return (
    <>
      <div className={styles['auth__headed']}>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div> 
      <WhiteBlock className={styles['white-block']}>
        {!success ? (
          <Form
            className="login-form"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Пожалуйста введите ваш E-mail!' }]}
              hasFeedback
              validateStatus={
                !touched.email ? '' : errors.email ? 'error' : 'success'
              }
              help={!touched.email ? '' : errors.email}
            >
              <Input
                id='email'
                prefix={<MailOutlined
                  className="site-form-item-icon" />}
                placeholder="E-mail"
                size='large'
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Пожалуйста введите ваше имя!' }]}
              hasFeedback
              validateStatus={
                !touched.name ? '' : errors.name ? 'error' : 'success'
              }
              help={!touched.name ? '' : errors.name}
            >
              <Input
                id='name'
                prefix={<UserOutlined
                  className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size='large'
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
              hasFeedback
              validateStatus={
                !touched.password ? '' : errors.password ? 'error' : 'success'
              }
              help={!touched.password ? '' : errors.password}
            >
              <Input
                id='password'
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size='large'
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              name="re-write-password"
              rules={[{ required: true, message: 'Пожалуйста повторите ваш пароль!' }]}
              hasFeedback
              validateStatus={
                !touched.reWritePassword ? '' : errors.reWritePassword ? 'error' : 'success'
              }
              help={!touched.reWritePassword ? '' : errors.reWritePassword}
            >
              <Input
                id='reWritePassword'
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size='large'
                placeholder="Повторите пароль"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Button className={styles.button} type="primary" size='large'>
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link href="/auth">
              <a className={styles['auth__register-link']} href="mockaddress">
                Войти в аккаунт
              </a>
            </Link>
          </Form>
        ) : (
          <div className={styles['auth__success-block']}>
            <div><InfoCircleTwoTone style={{fontSize: '50px'}} /></div>  
            <h2>Подтвердите свой аккаунт</h2>  
            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
          </div>
        )}
      </WhiteBlock>
    </>
  );
}

export default RegisterForm;

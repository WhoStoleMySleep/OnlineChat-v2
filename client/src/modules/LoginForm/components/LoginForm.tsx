import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import styles from './login-form.module.scss';
import Button from '../../../components/Button/Button';
import WhiteBlock from '../../../components/WhiteBlock/WhiteBlock';
import Link from 'next/link';

function LoginForm(props: any) {
  const {
    touched,  
    errors,
    handleChange,
    handleBlur,
  } = props

  return (
    <>
      <div className={styles['auth__headed']}>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div> 
      <WhiteBlock className={styles['white-block']}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
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
              placeholder="Username"
              size='large'
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
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
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Button className={styles.button} type="primary" size='large'>
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link href="/register">
            <a className={styles['auth__register-link']} href="mockaddress">
            Зарегистрироваться
            </a>
          </Link>
        </Form>
      </WhiteBlock>
    </>
  );
}

export default LoginForm;

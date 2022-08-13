import { LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import Button from '../../../components/Button/Button';
import WhiteBlock from '../../../components/WhiteBlock/WhiteBlock';
import Link from 'next/link';
import styles from './register-form.module.scss';

function RegisterForm() {
  const success = false;
  
  return (
    <>
      <div className={styles['auth__headed']}>
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div> 
      <WhiteBlock className={styles['white-block']}>
        {!success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
              hasFeedback
              validateStatus="success"
            >
              <Input
                prefix={<MailOutlined
                  className="site-form-item-icon" />}
                placeholder="Email"
                size='large'
              />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input
                prefix={<UserOutlined
                  className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size='large'
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size='large'
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item
              name="re-write-password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                size='large'
                placeholder="Повторите пароль"
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

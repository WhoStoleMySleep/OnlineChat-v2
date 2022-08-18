import { withFormik } from "formik";
import RegisterForm from '../components/RegisterForm';
import validateForm from '../../../utils/validateForm';

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '', reWritePassword: '', name: '' }),
  validate: (values: { email: string, password: string, reWritePassword: string; name: string; }) => {
    const errors = { email: '', password: '', reWritePassword: '', name: '' };

    const keys = Object.keys(values);
    const data = {
      email: [
        ['Введите email', 'Некорректный E-mail'],
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ],
      password: [
        ['Введите пароль', 'Слишком легкий пароль'],
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password),
      ],
      reWritePassword: [
        ['Повторите пароль', 'Пароли не совпадают'],
        values.password !== values.reWritePassword
      ],
      name: [
        ['Введите имя', 'Слишком короткое имя'],
        values.name.length < 3
      ],
    };

    keys.forEach((key) => validateForm(errors, data, values, key));

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'RegisterForm'
})(RegisterForm); 
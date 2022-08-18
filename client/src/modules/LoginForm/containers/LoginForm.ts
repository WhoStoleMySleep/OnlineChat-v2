import { withFormik } from "formik";
import LoginForm from '../components/LoginForm';
import validateForm from '../../../utils/validateForm';

export default withFormik({
  mapPropsToValues: () => ({ password: '', name: '' }),
  validate: (values: { password: string, name: string; }) => {
    const errors = { password: '', name: '' };

    const keys = Object.keys(values);
    const data = {
      password: [
        ['Введите пароль', 'Неверный пароль'],
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(values.password)
      ],
      name: [
        ['Введите имя', 'Неверное имя'],
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
  displayName: 'LoginForm'
})(LoginForm); 
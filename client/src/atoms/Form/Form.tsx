import { FC, FormHTMLAttributes, ReactNode } from 'react';
import s from './Form.module.scss';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form {...props} className={s.form}>
      {children}
    </form>
  );
};

export { Form };

import { FC, FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<FormProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export { Form };

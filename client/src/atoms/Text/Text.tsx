import { FC, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Text: FC<TextProps> = ({ children, as = 'p', ...props }) => {
  const Tag = as;

  return <Tag {...props}>{children}</Tag>;
};

export { Text };

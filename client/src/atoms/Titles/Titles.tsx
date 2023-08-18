import { FC } from 'react';

interface TitlesProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
}

const Titles: FC<TitlesProps> = ({ children, as = 'h1' }) => {
  const Tag = as;
  return <Tag>{children} </Tag>;
};

export { Titles };

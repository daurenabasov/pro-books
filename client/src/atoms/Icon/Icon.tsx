import { FC } from 'react';

interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Icon: FC<IconProps> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export { Icon };

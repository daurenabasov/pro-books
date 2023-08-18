import { FC } from 'react';
import { Icon } from '../../atoms/Icon';
import s from './Logo.module.scss';

interface LogoProps {
  src: string;
  width: number;
  height: number;
}

const Logo: FC<LogoProps> = ({ src, width, height }) => {
  return (
    <div className={s.logo}>
      <Icon src={src} alt='logo' width={width} height={height} />
    </div>
  );
};

export default Logo;

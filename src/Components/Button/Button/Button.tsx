import cn from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import st from './Button.module.scss';

type Variant = 'background' | 'outline' | 'clear' | 'icon';
type Size = 'xs' | 's' | 'm' | 'l';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variant;
  square?: boolean;
  size?: Size;
  fullWidth?: boolean;
  suffixIcon?: ReactNode;
}

export const Button = (props: IButtonProps) => {
  const {
    className,
    suffixIcon,
    children,
    square,
    fullWidth,
    variant = 'clear',
    size = 'm',
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cn(
        st.button,
        { [st.square]: square, [st.fullWidth]: fullWidth },
        className,
        st[variant],
        st[size],
      )}
      {...otherProps}
    >
      {children}
      {suffixIcon && suffixIcon}
    </button>
  );
};

import { ButtonHTMLAttributes, ReactNode } from 'react';
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
export declare const Button: (props: IButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};

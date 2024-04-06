import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size: number;
    className?: string;
}
export declare const Icon: React.MemoExoticComponent<(props: IconProps) => import("react/jsx-runtime").JSX.Element>;
export {};

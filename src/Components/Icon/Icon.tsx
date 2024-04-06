import cn from 'classnames';
import React, { memo } from 'react';

import st from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  size: number;
  className?: string;
}

export const Icon = memo((props: IconProps) => {
  const { Svg, size, className, ...otherProps } = props;
  const styles = { width: size, height: size };

  return (
    <Svg className={cn(className, st.icon)} style={styles} {...otherProps} />
  );
});

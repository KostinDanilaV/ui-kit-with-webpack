import { ReactComponent as CirclePlusIcon } from '../../../assets/icons/circle-plus.svg';

import { Icon } from '../../Icon';
import { Button, IButtonProps } from '../Button/Button';

export const PlusButton = (props: IButtonProps) => {
  return (
    <Button {...props} suffixIcon={<Icon Svg={CirclePlusIcon} size={24} />} />
  );
};

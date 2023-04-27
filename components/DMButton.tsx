import React from 'react';
import { Colors } from '../utilities/enums';
import {Button} from 'react-native';

const DMButton = (props: {
  id?: string;
  dataBsDismiss?: string;
  disabled?: boolean;
  className?: string;
  color: Colors;
  title: string;
  onClick?: (event: any) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: React.ReactNode;
  style?: object;
  hideTitle?: boolean;
  isFullWidth?: boolean;
}) => {
  const {
    className,
    color,
    dataBsDismiss,
    disabled,
    hideTitle,
    icon,
    id,
    isFullWidth,
    onClick,
    style,
    title,
    type,
  } = props;

  return (
    <Button title={title} color={Colors.primary} onPress={onClick}/>
  );
};

export default DMButton;

import React from 'react';
import { Button as BaseButton } from 'antd'
import classNames from 'classnames';
import './Button.scss';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

function Button(props:
  {
    children: string,
    className?: string,
    type?:
    "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined,
    size?: SizeType
  }) {
  const { className } = props

  return <BaseButton {...props} className={classNames('button', className, {
    'button_large': props.size === 'large'
  })} />
}

export default Button;

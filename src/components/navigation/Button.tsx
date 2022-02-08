import classNames from 'classnames'
import { FC } from 'react'

import { WithIcon } from '../helpers/types'

import {
  Button as UIButton,
  ButtonProps as UIButtonProps,
} from '../controls/Button'

type ButtonProps = WithIcon<UIButtonProps>

export const Button: FC<ButtonProps> = ({
  icon: Icon,
  className,
  children,
  ...props
}) => {
  const classes = classNames('nav-button', className)

  return (
    <UIButton className={classes} {...props}>
      {Icon && <Icon verticalAlign="middle" />}
      {children}
    </UIButton>
  )
}

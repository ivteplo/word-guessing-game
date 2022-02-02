import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
} from 'react'
import { Icon } from '@primer/octicons-react'
import classNames from 'classnames'

type ButtonAttributes =
  ButtonHTMLAttributes<HTMLButtonElement>

type HTMLButtonProps = DetailedHTMLProps<
  ButtonAttributes,
  HTMLButtonElement
>

interface ButtonProps extends HTMLButtonProps {
  icon?: Icon
}

export const Button: FC<ButtonProps> = ({
  icon: Icon,
  className,
  children,
  ...props
}) => {
  const classes = classNames('button', className)

  return (
    <button type="button" {...props} className={classes}>
      {Icon && <Icon verticalAlign="middle" />}
      {children}
    </button>
  )
}

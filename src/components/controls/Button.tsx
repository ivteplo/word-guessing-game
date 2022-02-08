import classNames from 'classnames'
import { FC } from 'react'

import { HTMLButtonProps } from '../helpers/types'

export type ButtonProps = HTMLButtonProps

export const Button: FC<ButtonProps> = ({
  className,
  ...props
}) => {
  const classes = classNames('button', className)

  return (
    <button type="button" className={classes} {...props} />
  )
}

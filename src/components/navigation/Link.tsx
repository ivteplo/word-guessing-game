import classNames from 'classnames'
import { FC } from 'react'

import { HTMLLinkProps, WithIcon } from '../helpers/types'

type LinkProps = WithIcon<HTMLLinkProps>

export const Link: FC<LinkProps> = ({
  icon: Icon,
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    'button nav-button text-decoration-none',
    className
  )

  return (
    <a {...props} className={classes}>
      {Icon && <Icon verticalAlign="middle" />}
      {children}
    </a>
  )
}

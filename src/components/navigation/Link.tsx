import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
} from 'react'
import classNames from 'classnames'
import { Icon } from '@primer/octicons-react'

type LinkAttributes =
  AnchorHTMLAttributes<HTMLAnchorElement>

type HTMLLinkProps = DetailedHTMLProps<
  LinkAttributes,
  HTMLAnchorElement
>

interface LinkProps extends HTMLLinkProps {
  icon?: Icon
}

export const Link: FC<LinkProps> = ({
  icon: Icon,
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    'button text-decoration-none',
    className
  )

  return (
    <a {...props} className={classes}>
      {Icon && <Icon verticalAlign="middle" />}
      {children}
    </a>
  )
}

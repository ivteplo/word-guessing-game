import { Icon } from '@primer/octicons-react'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react'

type ButtonAttributes =
  ButtonHTMLAttributes<HTMLButtonElement>

export type HTMLButtonProps = DetailedHTMLProps<
  ButtonAttributes,
  HTMLButtonElement
>

type LinkAttributes =
  AnchorHTMLAttributes<HTMLAnchorElement>

export type HTMLLinkProps = DetailedHTMLProps<
  LinkAttributes,
  HTMLAnchorElement
>

export type WithIcon<T> = T & {
  icon?: Icon
}

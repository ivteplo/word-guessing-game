import classNames from 'classnames'
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from 'react'

type DivAttributes = HTMLAttributes<HTMLDivElement>

type DivProps = DetailedHTMLProps<
  DivAttributes,
  HTMLDivElement
>

interface GridCellProps extends DivProps {}

export const GridCell: FC<GridCellProps> = ({
  className,
  ...props
}) => {
  const classes = classNames('game-grid-cell', className)

  return <div className={classes} {...props}></div>
}

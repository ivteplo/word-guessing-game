import classNames from 'classnames'
import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from 'react'
import { GridCell } from './GridCell'

type DivAttributes = HTMLAttributes<HTMLDivElement>

type DivProps = DetailedHTMLProps<
  DivAttributes,
  HTMLDivElement
>

interface InputGridProps extends DivProps {
  input: string
  diff?: boolean
  expected?: string
}

export const InputGrid: FC<InputGridProps> = ({
  input,
  diff,
  expected,
  className,
}) => {
  const classes = classNames('flex flex-row', className)

  const otherProps = (index: number) => {
    if (diff && expected) {
      return {
        className:
          expected[index] === input[index]
            ? 'bg-green-500'
            : expected.indexOf(input[index]) !== -1
            ? 'bg-yellow-500'
            : 'bg-secondary',
      }
    }
    return {}
  }

  return (
    <div className={classes}>
      {input.split('').map((character, index) => (
        <GridCell key={index} {...otherProps(index)}>
          {character}
        </GridCell>
      ))}
    </div>
  )
}

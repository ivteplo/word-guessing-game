import classNames from "classnames"
import { HTMLProps, FC, Children } from "react"

interface MenuSectionProps extends HTMLProps<HTMLDivElement> {
  sectionName: string
}

export const MenuSection: FC<MenuSectionProps> = ({
  sectionName,
  className,
  children,
  ...props
}) => {
  const classes = classNames('py-2', className)

  return (
    <section className={classes} {...props}>
      <h3 className="text-xs text-default text-opacity-50 mb-2 uppercase font-bold">
        {sectionName}
      </h3>
      <ul className="list-none">
        {Children.map(children, child => (
          <li className="mb-2">{child}</li>
        ))}
      </ul>
    </section>
  )
}

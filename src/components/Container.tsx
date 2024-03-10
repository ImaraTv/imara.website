import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-[16px] md:mx-[47px] max-w-[1440px]', className)}
      {...props}
    />
  )
}

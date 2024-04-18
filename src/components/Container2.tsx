import clsx from 'clsx'

export function Container2({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-[16px] md:mx-[4px] max-w-[1440px]', className)}
      {...props}
    />
  )
}

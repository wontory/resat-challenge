import { cn } from '@/utils/cn'

function Select({
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        'h-9 rounded-md border px-3 py-1 text-sm shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

function Option({
  children,
  ...props
}: React.OptionHTMLAttributes<HTMLOptionElement>) {
  return <option {...props}>{children}</option>
}

export { Select, Option }

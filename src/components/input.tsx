import { cn } from '@/utils/cn'

function Input({
  placeholder,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      placeholder={placeholder}
      className={cn(
        'h-9 rounded-md border px-3 py-1 text-sm shadow-sm transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

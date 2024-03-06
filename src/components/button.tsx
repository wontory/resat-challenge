import { cn } from '@/utils/cn'

function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'h-9 rounded-md px-4 py-2 text-sm font-medium shadow transition-colors disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }

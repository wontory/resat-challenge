import { cn } from '@/utils/cn'

function Checkbox({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={cn(
        'h-4 w-4 rounded-sm border border-black accent-black shadow',
        className,
      )}
      {...props}
    />
  )
}

export { Checkbox }

function Checkbox({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded-sm border border-black accent-black shadow ${className}`}
      {...props}
    />
  )
}

export { Checkbox }

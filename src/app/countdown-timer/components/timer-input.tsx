function TimerInput({
  placeholder,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      maxLength={2}
      placeholder={placeholder}
      className="max-w-20 text-center disabled:bg-inherit"
      {...props}
    />
  )
}

export { TimerInput }

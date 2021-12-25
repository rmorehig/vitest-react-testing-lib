interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string | undefined;
}

export function Input({ label, error, name, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
      {error ? <span role="alert">{error}</span> : null}
    </>
  );
}

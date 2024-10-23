export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid?: boolean;
  required?: boolean;
}

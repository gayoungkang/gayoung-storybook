export type ButtonProps = {
  label: string;
  disabled?: boolean;
  variant: "contained" | "outlined" | "text";
  size: "small" | "medium" | "large";
  onClick?: () => void;
  type: "submit" | "reset" | "button";
};

const Button = (props: ButtonProps) => {
  const {
    label,
    disabled,
    variant = "contained",
    size = "medium",
    type = "button",
  } = props;
  return (
    <button
      type={`${type}`}
      className={`GyButton ${variant} ${size}`}
      disabled={disabled ?? disabled}
    >
      {label}
    </button>
  );
};

export default Button;

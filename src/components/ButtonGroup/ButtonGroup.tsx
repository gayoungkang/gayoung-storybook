export type ButtonGroupProps = {
  label: string;
  orientation: "flex" | "inline-flex";
  disabled?: boolean;
  variant: "contained" | "outlined" | "text";
  size: "small" | "medium" | "large";
  onClick?: () => void;
  type: "submit" | "reset" | "button";
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    label,
    disabled,
    orientation = "flex",
    variant = "contained",
    size = "medium",
    type = "button",
  } = props;
  return (
    <div className={`GyButtonGroup ${orientation}`}>
      <button
        type={`${type}`}
        className={`GyButton ${variant} ${size}`}
        disabled={disabled ?? disabled}
      >
        {label}
      </button>
      <button
        type={`${type}`}
        className={`GyButton ${variant} ${size}`}
        disabled={disabled ?? disabled}
      >
        {label}
      </button>
      <button
        type={`${type}`}
        className={`GyButton ${variant} ${size}`}
        disabled={disabled ?? disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonGroup;

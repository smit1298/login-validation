import { Button as MuiButton } from "@mui/material";
import PropTypes from "prop-types";

function Button({
  type = "button",
  text,
  startIcon,
  endIcon,
  onClick,
  variant = "contained",
  size = "large",
  loading,
  disabled,
  styles,
  className,
  color
}) {
  return (
    <MuiButton
      className={className}
      type={type}
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...(styles || {}),
        backgroundColor: color === "red" ? "bg-red-300" : undefined // Check for custom color
      }}
    >
      {loading ? "Processing..." : text}
    </MuiButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  onClick: PropTypes.func,
  styles: PropTypes.object,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "error",
    "info",
    "warning",
    "light-primary",
    "yellowish",
    "green",
    "black",
    "red"
  ]),
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"])
};

export default Button;

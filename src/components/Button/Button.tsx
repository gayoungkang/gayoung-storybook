import { css, styled } from "styled-components";
import React from "react";
import { theme } from "@styles/theme";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

const Button = (props: ButtonProps) => {
  const {
    label,
    disabled,
    variant = "contained",
    size = "medium",
    type = "button",
    ...other
  } = props;

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      {...other}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  line-height: 1.75;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  ${({ variant }) =>
    variant === "contained" &&
    css`
      background-color: ${theme.colors.primary.main};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.primary.hover};
      }
      &:disabled {
        color: ${theme.colors.disabled.main};
        box-shadow: none;
        background-color: ${theme.colors.disabled.light};
        cursor: not-allowed;
        &:hover {
          background-color: ${theme.colors.disabled.light};
        }
      }
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.colors.primary.main};
      background-color: transparent;
      color: ${theme.colors.primary.main};
      &:hover {
        background-color: ${theme.colors.primary.hover};
        border: 1px solid ${theme.colors.primary.main};
      }
      &:disabled {
        color: ${theme.colors.disabled.main};
        border: 1px solid ${theme.colors.disabled.main};
        background-color: transparent;
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === "text" &&
    css`
      border: 0;
      color: ${theme.colors.primary.main};
      background-color: transparent;
      &:hover {
        background-color: ${theme.colors.primary.hover};
      }
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      padding: ${theme.fontSize.large};
      font-size: ${theme.fontSize.large};
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: ${theme.size.medium};
      font-size: ${theme.fontSize.medium};
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      padding: ${theme.size.small};
      font-size: ${theme.fontSize.small};
    `}
`;

export default Button;

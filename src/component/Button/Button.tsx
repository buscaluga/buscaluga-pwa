import ButtonStyled from "./ButtonStyled";
import { PropsWithChildren } from "react";

type ButtonType = "primary" | "secondary" | "subtitle" | "text";

interface ButtonProps extends PropsWithChildren {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button = ({ type = "primary", children, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonStyled className={type} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

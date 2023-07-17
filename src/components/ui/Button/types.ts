import { ButtonHTMLAttributes, ReactNode } from "react";

export const BUTTON_TYPE = {
  PRIMARY: "btn-primary",
  SECONDARY: "btn-secondary",
};

type ButtonStyleType = keyof typeof BUTTON_TYPE;

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  styleType: ButtonStyleType;
}

export interface ButtonTextProps {
  children: ReactNode;
}

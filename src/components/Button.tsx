import { Icon } from "./Icon";

import "../styles/button.scss";
import { ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

export function ButtonFunction({
  iconName,
  title,
  selected,
  ...rest
}: ButtonProps) {
  const color = selected ? "#FAE800" : "#FBFBFB";
  const styledClass = selected && { className: "selected" };
  return (
    <button type="button" {...styledClass} {...rest}>
      <Icon name={iconName} color={color} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonFunction, (prevProps, nextProps) => {
  return Object.is(prevProps.selected, nextProps.selected);
});

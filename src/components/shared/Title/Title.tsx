import s from "./Title.module.css";
import cn from "classnames";

interface Props {
  text: string;
  size?: "lg" | "md";
  upperCase?: boolean;
  className?: string;
}

export function Title({ text, size = "md", upperCase, className }: Props) {
  return (
    <h2
      className={cn(s.title, className, {
        [s.lg]: size === "lg",
        [s.md]: size === "md",
        [s.upperCase]: !!upperCase,
      })}
    >
      {text}
    </h2>
  );
}

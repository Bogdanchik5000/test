import { ReactNode } from "react";
import cn from "classnames";
import s from "./Container.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

export function Container({ children, className }: Props) {
  return <div className={cn(s.container, className)}>{children}</div>;
}

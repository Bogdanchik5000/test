import { HTMLAttributes, ReactNode } from "react";
import s from "./Btn.module.css";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  color: "green" | "white";
}

export default function Btn({ children, className, color, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${s.btn} ${className ?? ""}`}
      style={{ backgroundColor: color === "white" ? "white" : "#29FF58" }}
    >
      {children}
    </button>
  );
}

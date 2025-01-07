import { Nav } from "..";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.header}>
      <Nav />
    </header>
  );
}

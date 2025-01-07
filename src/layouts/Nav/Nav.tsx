import { Link } from "react-router";
import { Container } from "../../components/shared";
import s from "./Nav.module.css";
import pagesConfig from "../../pages.config";

export function Nav() {
  return (
    <Container className={s.content}>
      <img
        src="/logo.png"
        alt="site logo"
        className={s.img}
        width={69}
        height={69}
      />

      <nav className={s.navList}>
        <Link className={s.navItem} to={pagesConfig.MAIN_PAGE}>
          Pagina inicial
        </Link>
        <Link className={s.navItem} to={pagesConfig.PRIVACY_POLICY_PAGE}>
          Política de Privacidade
        </Link>
      </nav>

      <img
        src="/adult-icon.svg"
        alt="adult icon"
        className={s.img}
        width={69}
        height={69}
      />
    </Container>
  );
}

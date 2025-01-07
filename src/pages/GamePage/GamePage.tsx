import { Container } from "../../components/shared";
import s from "./GamePage.module.css";

export function GamePage() {
  return (
    <Container className={s.content}>
      <iframe
        className={s.gameFrame}
        src="https://esporte-br77.com/game-dir/index.html"
      ></iframe>
    </Container>
  );
}

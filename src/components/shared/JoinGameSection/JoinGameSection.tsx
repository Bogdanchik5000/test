import s from "./JoinGameSection.module.css";
import { Container, Title } from "../index";
import { Link } from "react-router";
import pagesConfig from "../../../pages.config";

export function JoinGameSection() {
  return (
    <section className={s.section}>
      <Container className={s.content}>
        <Title
          size="lg"
          upperCase
          text="Mergulhe no mundo da pesca com Fish Slot: tente a sorte agora mesmo!"
        ></Title>
        <p className={s.text}>
          Mergulhe no emocionante mundo das profundezas do oceano com nosso novo
          jogo Fish Slot. Entre na equipe de pescadores experientes e vá caçar
          peixes grandes. O jogo impressiona com belos gráficos 3D, rodadas de
          bônus emocionantes e inúmeras opções de jogo totalmente gratuitas.
        </p>
        <Link to={pagesConfig.GAME_PAGE} className={s.btn}>
          Jogo Grátis
        </Link>
      </Container>
    </section>
  );
}

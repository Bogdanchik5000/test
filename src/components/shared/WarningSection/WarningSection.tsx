import s from "./WarningSection.module.css";
import { Container, Title } from "../index";

export function WarningSection() {
  return (
    <section className={s.section}>
      <Container className={s.content}>
        <Title
          size="lg"
          upperCase
          text="Jogue de forma inteligente: diversão de cassino online para adultos
          maiores de 18 anos!"
        />
        <img
          src="/adult-icon.svg"
          alt="adult icon"
          width={200}
          className={s.img}
        />
        <p className={s.text}>
          Em nossa empresa, estamos comprometidos não apenas em proporcionar
          diversão e entretenimento por meio de nossos jogos, mas também em
          capacitar nossos clientes a jogar em um ambiente seguro e responsável.
          Seguimos cuidadosamente regras internas e políticas rigorosas que
          visam a proteção e segurança dos nossos clientes. Através da melhoria
          constante e da aplicação dos métodos mais recentes, garantimos um jogo
          justo e transparente. Nosso principal objetivo é que cada um de nossos
          clientes aproveite a jogabilidade sem comprometer seu bem-estar físico
          e psicológico.
        </p>
        <p className={s.text}>
          <b>
            18+ www.gamblingtherapy.org – Gambling Therapy é um serviço de apoio
            on-line mundial que oferece aconselhamento a pessoas que foram
            afetadas negativamente pelo jogo.
          </b>

          <b>
            www.gamblersanonymous.org/ga – Jogadores Anônimos oferece
            aconselhamento por telefone ou pessoalmente a qualquer pessoa
            afetada pelo jogo.
          </b>
        </p>
      </Container>
    </section>
  );
}
